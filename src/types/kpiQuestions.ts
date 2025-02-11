import type KPIQuestionsMockData from '../data/KPIQuestionsMockData.json';

export type KPIQuestion = {
    id: number;
    question: string;
};

export type KPIQuestions = typeof KPIQuestionsMockData.kpiQuestions; 