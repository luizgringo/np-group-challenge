import { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

interface DataPoint {
    name: string;
    value: number;
}

interface DataVizPreviewProps {
    title?: string;
}

const generateRandomData = (points = 7): DataPoint[] => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return Array.from({ length: points }, (_, i) => ({
        name: months[i % 12],
        value: Math.floor(Math.random() * 5000) + 1000
    }));
};

export function DataVizPreview({ title = 'Chart Preview' }: DataVizPreviewProps) {
    const svgRef = useRef<SVGSVGElement>(null);
    const [data, setData] = useState<DataPoint[]>(generateRandomData());
    const [chartType, setChartType] = useState<'line' | 'bar'>('line');

    const regenerateData = () => {
        setData(generateRandomData());
    };

    const toggleChartType = () => {
        setChartType(prev => prev === 'line' ? 'bar' : 'line');
    };

    useEffect(() => {
        if (!svgRef.current) return;

        d3.select(svgRef.current).selectAll('*').remove();

        const margin = { top: 20, right: 30, bottom: 30, left: 60 };
        const width = svgRef.current.clientWidth - margin.left - margin.right;
        const height = svgRef.current.clientHeight - margin.top - margin.bottom;

        const svg = d3.select(svgRef.current)
            .append('g')
            .attr('transform', `translate(${margin.left},${margin.top})`);

        const x = d3.scaleBand()
            .domain(data.map(d => d.name))
            .range([0, width])
            .padding(0.1);

        const y = d3.scaleLinear()
            .domain([0, d3.max(data, d => d.value) || 0])
            .range([height, 0]);

        // Grid lines
        svg.append('g')
            .attr('class', 'grid')
            .attr('transform', `translate(0,${height})`)
            .call(
                d3.axisBottom(x)
                    .tickSize(-height)
                    .tickFormat(() => '')
            )
            .style('stroke-dasharray', '3,3')
            .style('stroke-opacity', 0.2);

        svg.append('g')
            .attr('class', 'grid')
            .call(
                d3.axisLeft(y)
                    .tickSize(-width)
                    .tickFormat(() => '')
            )
            .style('stroke-dasharray', '3,3')
            .style('stroke-opacity', 0.2);

        // Axes
        svg.append('g')
            .attr('transform', `translate(0,${height})`)
            .call(d3.axisBottom(x))
            .style('color', '#6B7280');

        svg.append('g')
            .call(d3.axisLeft(y))
            .style('color', '#6B7280');

        if (chartType === 'line') {
            // Line chart
            const line = d3.line<DataPoint>()
                .x(d => (x(d.name) || 0) + x.bandwidth() / 2)
                .y(d => y(d.value));

            svg.append('path')
                .datum(data)
                .attr('fill', 'none')
                .attr('stroke', '#6B7280')
                .attr('stroke-width', 2)
                .attr('d', line);

            // Points
            svg.selectAll('circle')
                .data(data)
                .enter()
                .append('circle')
                .attr('cx', d => (x(d.name) || 0) + x.bandwidth() / 2)
                .attr('cy', d => y(d.value))
                .attr('r', 4)
                .attr('fill', '#6B7280')
                .on('mouseover', function(event, d) {
                    d3.select(this)
                        .transition()
                        .duration(200)
                        .attr('r', 6)
                        .attr('fill', '#4B5563');

                    svg.append('text')
                        .attr('class', 'tooltip')
                        .attr('x', (x(d.name) || 0) + x.bandwidth() / 2)
                        .attr('y', y(d.value) - 10)
                        .attr('text-anchor', 'middle')
                        .style('font-size', '12px')
                        .style('fill', '#4B5563')
                        .text(d.value);
                })
                .on('mouseout', function() {
                    d3.select(this)
                        .transition()
                        .duration(200)
                        .attr('r', 4)
                        .attr('fill', '#6B7280');

                    svg.selectAll('.tooltip').remove();
                });
        } else {
            // Bar chart
            svg.selectAll('rect')
                .data(data)
                .enter()
                .append('rect')
                .attr('x', d => x(d.name) || 0)
                .attr('y', d => y(d.value))
                .attr('width', x.bandwidth())
                .attr('height', d => height - y(d.value))
                .attr('fill', '#6B7280')
                .on('mouseover', function(event, d) {
                    d3.select(this)
                        .transition()
                        .duration(200)
                        .attr('fill', '#4B5563');

                    svg.append('text')
                        .attr('class', 'tooltip')
                        .attr('x', (x(d.name) || 0) + x.bandwidth() / 2)
                        .attr('y', y(d.value) - 10)
                        .attr('text-anchor', 'middle')
                        .style('font-size', '12px')
                        .style('fill', '#4B5563')
                        .text(d.value);
                })
                .on('mouseout', function() {
                    d3.select(this)
                        .transition()
                        .duration(200)
                        .attr('fill', '#6B7280');

                    svg.selectAll('.tooltip').remove();
                });
        }
    }, [data, chartType]);

    return (
        <div className="mb-6 p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-gray-600">{title}</h3>
                <div className="flex gap-2">
                    <button
                        onClick={toggleChartType}
                        className="px-3 py-1 text-sm bg-white border border-gray-200 rounded-md hover:bg-gray-50 transition-colors"
                        type="button"
                    >
                        {chartType === 'line' ? 'Change to Bars' : 'Change to Line'}
                    </button>
                    <button
                        onClick={regenerateData}
                        className="px-3 py-1 text-sm bg-white border border-gray-200 rounded-md hover:bg-gray-50 transition-colors"
                        type="button"
                    >
                        Generate New Data
                    </button>
                </div>
            </div>
            <div className="h-64">
                <svg
                    ref={svgRef}
                    width="100%"
                    height="100%"
                    className="overflow-visible"
                />
            </div>
        </div>
    );
} 