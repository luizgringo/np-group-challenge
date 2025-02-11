import { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const sampleData = [
    { name: 'Jan', value: 4000 },
    { name: 'Feb', value: 3000 },
    { name: 'Mar', value: 2000 },
    { name: 'Apr', value: 2780 },
    { name: 'May', value: 1890 },
    { name: 'Jun', value: 2390 },
    { name: 'Jul', value: 3490 }
];

export function DataVizPreview() {
    const svgRef = useRef<SVGSVGElement>(null);

    useEffect(() => {
        if (!svgRef.current) return;

        d3.select(svgRef.current).selectAll('*').remove();

        const margin = { top: 20, right: 30, bottom: 30, left: 60 };
        const width = svgRef.current.clientWidth - margin.left - margin.right;
        const height = svgRef.current.clientHeight - margin.top - margin.bottom;

        const svg = d3.select(svgRef.current)
            .append('g')
            .attr('transform', `translate(${margin.left},${margin.top})`);

        const x = d3.scalePoint()
            .domain(sampleData.map(d => d.name))
            .range([0, width]);

        const y = d3.scaleLinear()
            .domain([0, d3.max(sampleData, d => d.value) || 0])
            .range([height, 0]);

        const line = d3.line<typeof sampleData[0]>()
            .x(d => x(d.name) || 0)
            .y(d => y(d.value));

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

        svg.append('g')
            .attr('transform', `translate(0,${height})`)
            .call(d3.axisBottom(x))
            .style('color', '#6B7280');

        svg.append('g')
            .call(d3.axisLeft(y))
            .style('color', '#6B7280');

        svg.append('path')
            .datum(sampleData)
            .attr('fill', 'none')
            .attr('stroke', '#6B7280')
            .attr('stroke-width', 2)
            .attr('d', line);

        svg.selectAll('circle')
            .data(sampleData)
            .enter()
            .append('circle')
            .attr('cx', d => x(d.name) || 0)
            .attr('cy', d => y(d.value))
            .attr('r', 4)
            .attr('fill', '#6B7280')
            .on('mouseover', function(event, d) {
                d3.select(this)
                    .transition()
                    .duration(200)
                    .attr('r', 6)
                    .attr('fill', '#4B5563');

                // Tooltip
                svg.append('text')
                    .attr('class', 'tooltip')
                    .attr('x', x(d.name) || 0)
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
    }, []);

    return (
        <div className="mb-6 p-4 bg-gray-50 rounded-lg">
            <h3 className="text-sm font-medium text-gray-600 mb-4">Chart Preview</h3>
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