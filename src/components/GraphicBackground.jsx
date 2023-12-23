import React from 'react';
import style from './GraphicBackground.module.css';

const GraphicBackground = ({children}) => {

    const LINE_LENGTH = 100;
    const LINE_WIDTH = {
        "THICK": 1,
        "MEDIUM": 0.5,
        "THIN": 0.2
    };
    const LINE_COLOR = {
        "foreground" : "#2c363f",
        "incidental" : "#0075c9"
    };
    const LINE_OVERLAP_LENGTH = 3;
    const GRID_SIZE = 10;
    const GRID_COUNT = 11;

    const GRID_ARRAY = Array.from(Array(GRID_COUNT).keys());

    const Y_AXIS = GRID_ARRAY.map((i) => {
        return (
            <text
                key={i}
                x={3}
                y={i * GRID_SIZE + GRID_SIZE}
                textAnchor="middle"
                alignmentBaseline="middle"
            >
                {i * 10}
            </text>
        )
    })

    const X_AXIS = GRID_ARRAY.map((i) => {
        return (
            <text
                key={i}
                x={i * GRID_SIZE + GRID_SIZE}
                y={3}
                textAnchor="middle"
                alignmentBaseline="middle"
            >
                {i * 10}
            </text>
        )
    })

    const VERTICAL_LINES = GRID_ARRAY.map((i) => {
        return (
            <use
                key={i}
                href="#vertical-grid-line"
                x={i * GRID_SIZE}
                y={0}
                strokeWidth={calculateStrokeWidth(i)}
                stroke={calculateStroke(i)}
            />
        )
    })

    const HORIZONTAL_LINES = GRID_ARRAY.map((i) => {
        return (
            <use
                key={i}
                href="#horizontal-grid-line"
                x={0}
                y={i * GRID_SIZE}
                strokeWidth={calculateStrokeWidth(i)}
                stroke={calculateStroke(i)}
            />
        )
    })

    function calculateStrokeWidth(i) {
        if (i === 0) {
            return LINE_WIDTH["THICK"];
        } else if (i % 5 === 0) {
            return LINE_WIDTH["MEDIUM"];
        } else {
            return LINE_WIDTH["THIN"];
        }
    }

    function calculateStroke(i) {
        if (i === 0) {
            return LINE_COLOR["foreground"];
        } else if (i % 5 === 0) {
            return LINE_COLOR["incidental"];
        } else {
            return LINE_COLOR["foreground"];
        }
    }

    return (
        <svg className={style.graphicBackground} viewBox="0 0 120 120">
            {X_AXIS}
            {Y_AXIS}
            <line 
                id="horizontal-grid-line"
                x1={GRID_SIZE - LINE_OVERLAP_LENGTH}
                y1={GRID_SIZE}
                x2={GRID_SIZE + LINE_LENGTH + LINE_OVERLAP_LENGTH}
                y2={GRID_SIZE}
            />
            <line 
                id="vertical-grid-line"
                x1={GRID_SIZE}
                y1={GRID_SIZE - LINE_OVERLAP_LENGTH}
                x2={GRID_SIZE}
                y2={GRID_SIZE + LINE_LENGTH + LINE_OVERLAP_LENGTH}
            />
            {VERTICAL_LINES}
            {HORIZONTAL_LINES}
            <g transform={`translate(${GRID_SIZE},${GRID_SIZE})`}>
            {children}
            </g>
        </svg>
    )
}

export default GraphicBackground;