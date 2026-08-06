import React, { useEffect, useRef, useState } from 'react';
import { HiChevronDown } from "react-icons/hi";
import styles from '@/app/styles/inquiry.module.css'

// Define categories with their respective dimensions and formula

// Calculator Component
const Calculator = ({
  detailIndex,
  setDetails,
  sqft, setSqft,
  product,
  weight,
  setWeight,
  pieces,
  setPieces,
  dimValues,
  inputMethod,
  setInputMethod,
  dimensions, setDimensions,
  setDimValues,
  category }) => {
  const [drop, setDrop] = useState(Array(5).fill(false));
  const [success, setSuccess] = useState({ success: null, text: '' });

  const CHANNEL_SECTION_OPTIONS = [
    { label: "75 (H) x 40 (W)", weight: "7.14" },
    { label: "100 (H) x 50 (W)", weight: "9.56" },
    { label: "125 (H) x 65 (W)", weight: "13.10" },
    { label: "125 (H) x 66 (W)", weight: "13.70" },
    { label: "150 (H) x 75 (W)", weight: "16.80" },
    { label: "150 (H) x 76 (W)", weight: "17.70" },
    { label: "175 (H) x 75 (W)", weight: "19.60" },
    { label: "175 (H) x 76 (W)", weight: "22.70" },
    { label: "200 (H) x 75 (W)", weight: "22.30" },
    { label: "200 (H) x 76 (W)", weight: "24.30" },
    { label: "225 (H) x 80 (W)", weight: "26.10" },
    { label: "225 (H) x 82 (W)", weight: "30.70" },
    { label: "250 (H) x 80 (W)", weight: "30.60" },
    { label: "250 (H) x 82 (W)", weight: "34.20" },
    { label: "250 (H) x 83 (W)", weight: "38.10" },
    { label: "300 (H) x 90 (W)", weight: "36.30" },
    { label: "300 (H) x 92 (W)", weight: "41.50" },
    { label: "300 (H) x 93 (W)", weight: "46.20" },
    { label: "350 (H) x 100 (W)", weight: "42.70" },
    { label: "400 (H) x 100 (W)", weight: "50.10" },
  ];

  const EQUAL_ANGLE_OPTIONS = [
    { label: "20 (L1) x 20 (L2) x 3 (T)", weight: "0.89" },
    { label: "25 (L1) x 25 (L2) x 3 (T)", weight: "1.10" },
    { label: "25 (L1) x 25 (L2) x 5 (T)", weight: "1.80" },
    { label: "30 (L1) x 30 (L2) x 3 (T)", weight: "1.31" },
    { label: "35 (L1) x 35 (L2) x 3 (T)", weight: "1.60" },
    { label: "35 (L1) x 35 (L2) x 5 (T)", weight: "2.70" },
    { label: "40 (L1) x 40 (L2) x 3 (T)", weight: "1.80" },
    { label: "40 (L1) x 40 (L2) x 5 (T)", weight: "3.02" },
    { label: "40 (L1) x 40 (L2) x 6 (T)", weight: "3.50" },
    { label: "50 (L1) x 50 (L2) x 5 (T)", weight: "3.79" },
    { label: "50 (L1) x 50 (L2) x 6 (T)", weight: "4.49" },
    { label: "60 (L1) x 60 (L2) x 6 (T)", weight: "5.40" },
    { label: "65 (L1) x 65 (L2) x 5 (T)", weight: "4.90" },
    { label: "65 (L1) x 65 (L2) x 6 (T)", weight: "5.71" },
    { label: "65 (L1) x 65 (L2) x 8 (T)", weight: "7.70" },
    { label: "75 (L1) x 75 (L2) x 6 (T)", weight: "6.80" },
    { label: "75 (L1) x 75 (L2) x 8 (T)", weight: "8.85" },
    { label: "75 (L1) x 75 (L2) x 10 (T)", weight: "11.00" },
    { label: "90 (L1) x 90 (L2) x 6 (T)", weight: "8.20" },
    { label: "90 (L1) x 90 (L2) x 8 (T)", weight: "10.80" },
    { label: "90 (L1) x 90 (L2) x 10 (T)", weight: "13.40" },
    { label: "100 (L1) x 100 (L2) x 8 (T)", weight: "12.10" },
    { label: "100 (L1) x 100 (L2) x 10 (T)", weight: "15.20" },
    { label: "100 (L1) x 100 (L2) x 12 (T)", weight: "17.70" },
    { label: "150 (L1) x 150 (L2) x 12 (T)", weight: "27.90" },
    { label: "150 (L1) x 150 (L2) x 16 (T)", weight: "35.80" },
    { label: "200 (L1) x 200 (L2) x 16 (T)", weight: "48.50" },
    { label: "200 (L1) x 200 (L2) x 20 (T)", weight: "60.00" },
  ];

  const UNEQUAL_ANGLE_OPTIONS = [
    { label: "40 (L) x 25 (S) x 3 (T)", weight: "1.48" },
    { label: "50 (L) x 32 (S) x 3 (T)", weight: "1.83" },
    { label: "50 (L) x 30 (S) x 4 (T)", weight: "2.41" },
    { label: "50 (L) x 32 (S) x 5 (T)", weight: "2.97" },
    { label: "65 (L) x 40 (S) x 5 (T)", weight: "3.70" },
    { label: "65 (L) x 50 (S) x 5 (T)", weight: "4.08" },
    { label: "75 (L) x 50 (S) x 5 (T)", weight: "4.48" },
    { label: "75 (L) x 50 (S) x 6 (T)", weight: "5.29" },
    { label: "80 (L) x 50 (S) x 5 (T)", weight: "4.67" },
    { label: "80 (L) x 60 (S) x 6 (T)", weight: "6.38" },
    { label: "90 (L) x 60 (S) x 6 (T)", weight: "6.86" },
    { label: "90 (L) x 65 (S) x 6 (T)", weight: "7.10" },
    { label: "100 (L) x 65 (S) x 6 (T)", weight: "7.57" },
    { label: "100 (L) x 75 (S) x 6 (T)", weight: "8.04" },
    { label: "100 (L) x 75 (S) x 8 (T)", weight: "10.58" },
    { label: "125 (L) x 75 (S) x 6 (T)", weight: "9.24" },
    { label: "125 (L) x 75 (S) x 8 (T)", weight: "12.19" },
    { label: "125 (L) x 95 (S) x 6 (T)", weight: "10.18" },
    { label: "125 (L) x 95 (S) x 8 (T)", weight: "13.45" },
    { label: "150 (L) x 75 (S) x 9 (T)", weight: "14.96" },
    { label: "150 (L) x 90 (S) x 10 (T)", weight: "18.20" },
    { label: "150 (L) x 100 (S) x 10 (T)", weight: "19.27" },
    { label: "150 (L) x 115 (S) x 8 (T)", weight: "16.80" },
    { label: "200 (L) x 100 (S) x 10 (T)", weight: "23.40" },
  ];

  const I_BEAM_OPTIONS = [
    { label: "100 (H) x 50 (W) x 5.0 (T)", weight: "9.56" },
    { label: "125 (H) x 70 (W) x 5.5 (T)", weight: "13.3" },
    { label: "150 (H) x 75 (W) x 5.7 (T)", weight: "16.8" },
    { label: "175 (H) x 85 (W) x 5.8 (T)", weight: "19.6" },
    { label: "200 (H) x 100 (W) x 5.5 (T)", weight: "22.3" },
    { label: "225 (H) x 110 (W) x 6.0 (T)", weight: "26.1" },
    { label: "250 (H) x 125 (W) x 6.0 (T)", weight: "29.6" },
    { label: "300 (H) x 150 (W) x 6.5 (T)", weight: "36.7" },
    { label: "350 (H) x 175 (W) x 7.0 (T)", weight: "45.0" },
    { label: "400 (H) x 180 (W) x 8.0 (T)", weight: "50.0" },
    { label: "450 (H) x 190 (W) x 9.0 (T)", weight: "58.2" },
  ];

  const NPB_OPTIONS = [
    { label: "100 (H) x 50 (W)", weight: "9.6" },
    { label: "125 (H) x 65 (W)", weight: "13.4" },
    { label: "150 (H) x 75 (W)", weight: "17.7" },
    { label: "200 (H) x 100 (W)", weight: "24.3" },
    { label: "250 (H) x 125 (W)", weight: "35.9" },
    { label: "300 (H) x 150 (W)", weight: "47.1" },
    { label: "350 (H) x 175 (W)", weight: "59.9" },
    { label: "400 (H) x 180 (W)", weight: "66.0" },
    { label: "450 (H) x 190 (W)", weight: "79.4" },
  ];

  const WPB_OPTIONS = [
    { label: "150 (H) x 75 (W)", weight: "14.0" },
    { label: "200 (H) x 100 (W)", weight: "21.0" },
    { label: "250 (H) x 125 (W)", weight: "32.0" },
    { label: "300 (H) x 150 (W)", weight: "41.0" },
    { label: "350 (H) x 175 (W)", weight: "52.0" },
    { label: "400 (H) x 180 (W)", weight: "66.0" },
    { label: "450 (H) x 190 (W)", weight: "79.4" },
    { label: "500 (H) x 200 (W)", weight: "103.6" },
    { label: "600 (H) x 300 (W)", weight: "160.0" },
  ];

  const T_SECTION_OPTIONS = [
    { label: "40 (H) x 40 (W) x 6 (T)", width: "0.04", thickness: "0.004" },
    { label: "50 (H) x 50 (W) x 6 (T)", width: "0.05", thickness: "0.005" },
    { label: "75 (H) x 75 (W) x 8 (T)", width: "0.075", thickness: "0.0075" },
    { label: "100 (H) x 100 (W) x 10 (T)", width: "0.1", thickness: "0.01" },
    { label: "150 (H) x 150 (W) x 12 (T)", width: "0.15", thickness: "0.012" },
  ];

  const ERW_PIPE_OPTIONS = [
    { label: "21.3 (OD) x 2.0 (T)", outerDiameter: "0.0213", wallThickness: "0.002" },
    { label: "26.9 (OD) x 2.0 (T)", outerDiameter: "0.0269", wallThickness: "0.002" },
    { label: "33.7 (OD) x 2.6 (T)", outerDiameter: "0.0337", wallThickness: "0.0026" },
    { label: "42.4 (OD) x 2.6 (T)", outerDiameter: "0.0424", wallThickness: "0.0026" },
    { label: "48.3 (OD) x 3.2 (T)", outerDiameter: "0.0483", wallThickness: "0.0032" },
    { label: "60.3 (OD) x 3.2 (T)", outerDiameter: "0.0603", wallThickness: "0.0032" },
    { label: "76.1 (OD) x 3.6 (T)", outerDiameter: "0.0761", wallThickness: "0.0036" },
    { label: "88.9 (OD) x 4.0 (T)", outerDiameter: "0.0889", wallThickness: "0.004" },
    { label: "114.3 (OD) x 4.5 (T)", outerDiameter: "0.1143", wallThickness: "0.0045" },
    { label: "168.3 (OD) x 5.6 (T)", outerDiameter: "0.1683", wallThickness: "0.0056" },
  ];
  const ERW_PIPE_DENSITY = 7853.142;

  const SQUARE_PIPE_OPTIONS = [
    { label: "20 (H) x 20 (W) x 1.6 (T)", width: "0.02", thickness: "0.0016" },
    { label: "25 (H) x 25 (W) x 2.0 (T)", width: "0.025", thickness: "0.002" },
    { label: "30 (H) x 30 (W) x 2.0 (T)", width: "0.03", thickness: "0.002" },
    { label: "40 (H) x 40 (W) x 2.5 (T)", width: "0.04", thickness: "0.0025" },
    { label: "50 (H) x 50 (W) x 3.0 (T)", width: "0.05", thickness: "0.003" },
    { label: "60 (H) x 60 (W) x 4.0 (T)", width: "0.06", thickness: "0.004" },
    { label: "75 (H) x 75 (W) x 4.0 (T)", width: "0.075", thickness: "0.004" },
    { label: "100 (H) x 100 (W) x 4.0 (T)", width: "0.1", thickness: "0.004" },
  ];

  const RECTANGLE_HOLLOW_SECTION_OPTIONS = [
    { label: "40 (W) x 20 (H) x 2 (T)", width: "0.04", height: "0.02", thickness: "0.002" },
    { label: "50 (W) x 25 (H) x 3 (T)", width: "0.05", height: "0.025", thickness: "0.003" },
    { label: "60 (W) x 30 (H) x 3.2 (T)", width: "0.06", height: "0.03", thickness: "0.0032" },
    { label: "80 (W) x 40 (H) x 4 (T)", width: "0.08", height: "0.04", thickness: "0.004" },
    { label: "100 (W) x 50 (H) x 5 (T)", width: "0.1", height: "0.05", thickness: "0.005" },
    { label: "120 (W) x 60 (H) x 5 (T)", width: "0.12", height: "0.06", thickness: "0.005" },
    { label: "150 (W) x 75 (H) x 6 (T)", width: "0.15", height: "0.075", thickness: "0.006" },
    { label: "200 (W) x 100 (H) x 6 (T)", width: "0.2", height: "0.1", thickness: "0.006" },
  ];

  const CHS_PIPE_OPTIONS = [
    { label: "21.3 (OD) x 2.0 (T)", outerDiameter: "0.0213", wallThickness: "0.002", thickness: "0.002" },
    { label: "26.9 (OD) x 2.0 (T)", outerDiameter: "0.0269", wallThickness: "0.002", thickness: "0.002" },
    { label: "33.7 (OD) x 2.6 (T)", outerDiameter: "0.0337", wallThickness: "0.0026", thickness: "0.0026" },
    { label: "42.4 (OD) x 2.6 (T)", outerDiameter: "0.0424", wallThickness: "0.0032", thickness: "0.0032" },
    { label: "48.3 (OD) x 3.2 (T)", outerDiameter: "0.0483", wallThickness: "0.0032", thickness: "0.0032" },
    { label: "60.3 (OD) x 3.2 (T)", outerDiameter: "0.0603", wallThickness: "0.0036", thickness: "0.0036" },
    { label: "76.1 (OD) x 3.6 (T)", outerDiameter: "0.0761", wallThickness: "0.004", thickness: "0.004" },
    { label: "88.9 (OD) x 4.0 (T)", outerDiameter: "0.0889", wallThickness: "0.004", thickness: "0.004" },
    { label: "114.3 (OD) x 4.5 (T)", outerDiameter: "0.1143", wallThickness: "0.0045", thickness: "0.0045" },
    { label: "168.3 (OD) x 5.6 (T)", outerDiameter: "0.1683", wallThickness: "0.0056", thickness: "0.0056" },
  ];

  const NOMINAL_BORE_OPTIONS = [
    { label: "15 (NB) x 2.60 (T)", outerDiameter: "0.0213", wallThickness: "0.0026" },
    { label: "20 (NB) x 2.60 (T)", outerDiameter: "0.0269", wallThickness: "0.0026" },
    { label: "25 (NB) x 3.20 (T)", outerDiameter: "0.0337", wallThickness: "0.0032" },
    { label: "32 (NB) x 3.20 (T)", outerDiameter: "0.0424", wallThickness: "0.0032" },
    { label: "40 (NB) x 3.20 (T)", outerDiameter: "0.0483", wallThickness: "0.0032" },
    { label: "50 (NB) x 3.60 (T)", outerDiameter: "0.0603", wallThickness: "0.0036" },
    { label: "65 (NB) x 3.60 (T)", outerDiameter: "0.0761", wallThickness: "0.0036" },
    { label: "80 (NB) x 4.00 (T)", outerDiameter: "0.0889", wallThickness: "0.004" },
    { label: "100 (NB) x 4.50 (T)", outerDiameter: "0.1143", wallThickness: "0.0045" },
    { label: "150 (NB) x 4.80 (T)", outerDiameter: "0.1683", wallThickness: "0.0048" },
  ];


  const CATEGORIES = {
    "Sheets": {
      inputs: ["Weight", "Pieces"],
      getDimensions: (inputMethod) =>
        ["thickness", "width", "length", inputMethod === "Weight" ? "noOfSheets" : "weight"],
      formula: ({ thickness, width, length, noOfSheets }) =>
        (thickness * width * length * noOfSheets * 7.85) / 1e9,
      formula_weight: ({ thickness, width, length, weight }) =>
        (1e9 * weight) / (thickness * width * length * 7.85),
    },
    "Packets": {
      inputs: ["Weight"],
      getDimensions: (inputMethod) => ['noOfPackets'],
      formula: ({ noOfPackets }) => {
        const result = product === "Hot Rolled Pickled & Oiled (HRPO)" || product === "Hot Rolled (HR)" ? noOfPackets * 5 : noOfPackets * 3
        return result;
      },
    },
    "Coils": {
      inputs: ["Weight"],
      getDimensions: (inputMethod) => ['thickness', 'width', 'noOfCoils', 'weightPerCoil'],
      formula: ({ thickness, width, noOfCoils, weightPerCoil }) =>
        noOfCoils * weightPerCoil
    },
    "Slitted Coils": {
      inputs: ["Weight"],
      getDimensions: (inputMethod) => ['thickness', 'width', "noOfSlittedCoils", "weightPerCoil"],
      formula: ({ thickness, width, noOfSlittedCoils, weightPerCoil }) => noOfSlittedCoils * weightPerCoil,
    },
    "Roofing Sheets": {
      inputs: ["Weight", "Pieces"],
      getDimensions: (inputMethod) => ['thickness', 'width', 'length', inputMethod === "Weight" ? "noOfSheets" : "weight"],
      formula: ({ thickness, width, length, noOfSheets }) =>
        (thickness * width * length * noOfSheets * 7.85) / 1e9,
      formula_weight: ({ thickness, width, length, weight }) =>
        (1e9 * weight) / (thickness * width * length * 7.85),
    },
    "C Purlin and Z Purlin": {
      inputs: ["Weight", "Pieces"],
      getDimensions: (inputMethod) => ['thickness', 'slittedCoil', 'length', inputMethod === "Weight" ? "noOfPieces" : "weight"],
      formula: ({ thickness, slittedCoil, length, noOfPieces }) =>
        (thickness * slittedCoil * length * noOfPieces * 7.85) / 100000000,
      formula_weight: ({ thickness, slittedCoil, length, weight }) =>
        (weight * 100000000) / (thickness * slittedCoil * length * 7.85),
    },
    "L-Section Equal Angles": {
      inputs: ["Weight", "Pieces"],
      getDimensions: (inputMethod) => ['sectionSize', 'length', inputMethod === "Weight" ? "noOfPieces" : "weight"],
      formula: ({ sectionalWeight, length, noOfPieces }) =>
        (parseFloat(sectionalWeight) * length * noOfPieces) / 1000,
      formula_weight: ({ sectionalWeight, length, weight }) =>
        (weight * 1000) / (parseFloat(sectionalWeight) * length),
    },
    "L-Section Unequal Angles": {
      inputs: ["Weight", "Pieces"],
      getDimensions: (inputMethod) => ['sectionSize', 'length', inputMethod === "Weight" ? "noOfPieces" : "weight"],
      formula: ({ sectionalWeight, length, noOfPieces }) =>
        (parseFloat(sectionalWeight) * length * noOfPieces) / 1000,
      formula_weight: ({ sectionalWeight, length, weight }) =>
        (weight * 1000) / (parseFloat(sectionalWeight) * length),
    },
    "T-Sections (Angles)": {
      inputs: ["Weight", "Pieces"],
      getDimensions: (inputMethod) => ['sectionSize', 'length', inputMethod === "Weight" ? "noOfPieces" : "weight"],
      formula: ({ width, thickness, length, noOfPieces }) => {
        const widthMM = parseFloat(width) * 1000;
        const thicknessMM = parseFloat(thickness) * 1000;
        return (2 * widthMM * thicknessMM * length * noOfPieces * 7850) / 1000000000;
      },
      formula_weight: ({ thickness, width, length, weight }) => {
        const widthMM = parseFloat(width) * 1000;
        const thicknessMM = parseFloat(thickness) * 1000;
        return (weight * 1000000000) / (2 * widthMM * thicknessMM * length * 7850);
      }

    },
    "C/U - Channels": {
      inputs: ["Weight", "Pieces"],
      getDimensions: (inputMethod) => ['sectionSize', 'length', inputMethod === "Weight" ? "noOfPieces" : "weight"],
      formula: ({ sectionalWeight, length, noOfPieces }) => {
        return (parseFloat(sectionalWeight) * length * noOfPieces) / 1000
      },
      formula_weight: ({ sectionalWeight, length, weight }) => (weight * 1000) / (parseFloat(sectionalWeight) * length),
    },
    "Square Pipes": {
      inputs: ["Weight", "Pieces"],
      getDimensions: (inputMethod) => ['sectionSize', 'length', inputMethod === "Weight" ? "noOfPieces" : "weight"],
      formula: ({ width, thickness, length, noOfPieces }) => {
        const widthMM = parseFloat(width);
        const thicknessMM = parseFloat(thickness);
        return (noOfPieces * (4 * (widthMM - thicknessMM) * thicknessMM * length * 7850)) / 1000
      },
      formula_weight: ({ width, thickness, length, weight }) => {
        const widthMM = parseFloat(width);
        const thicknessMM = parseFloat(thickness);
        return (weight * 1000) / (4 * (widthMM - thicknessMM) * thicknessMM * length * 7850)
      }
    },
    "Round Pipes": {
      inputs: ["Weight", "Pieces"],
      getDimensions: (inputMethod) => ['sectionSize', 'length', inputMethod === "Weight" ? "noOfPieces" : "weight"],
      formula: ({ outerDiameter, wallThickness, length, noOfPieces }) => {
        const outerDiameterMM = parseFloat(outerDiameter);
        const wallthicknessMM = parseFloat(wallThickness);
        return (noOfPieces * Math.PI * (outerDiameterMM - wallthicknessMM) * wallthicknessMM * length * 7850) / 1000
      },
      formula_weight: ({ outerDiameter, wallThickness, length, weight }) => {
        const outerDiameterMM = parseFloat(outerDiameter);
        const wallthicknessMM = parseFloat(wallThickness);
        return (weight * 1000) / (Math.PI * (outerDiameterMM - wallthicknessMM) * wallthicknessMM * length * 7850)
      },
    },
    "Square Hollow Sections": {
      inputs: ["Weight", "Pieces"],
      getDimensions: (inputMethod) => ['sectionSize', 'length', inputMethod === "Weight" ? "noOfPieces" : "weight"],
      formula: ({ width, thickness, length, noOfPieces }) => {
        const widthMM = parseFloat(width);
        const thicknessMM = parseFloat(thickness);
        return (noOfPieces * (4 * (widthMM - thicknessMM) * thicknessMM * length * 7850)) / 1000
      },
      formula_weight: ({ width, thickness, length, weight }) => {
        const widthMM = parseFloat(width);
        const thicknessMM = parseFloat(thickness);
        return (weight * 1000) / (4 * (widthMM - thicknessMM) * thicknessMM * length * 7850)
      }
    },
    "Rectangle Hollow Sections": {
      inputs: ["Weight", "Pieces"],
      getDimensions: (inputMethod) => ['sectionSize', 'length', inputMethod === "Weight" ? "noOfPieces" : "weight"],
      formula: ({ width, height, thickness, length, noOfPieces }) => {
        const widthMM = parseFloat(width);
        const heightMM = parseFloat(height);
        const thicknessMM = parseFloat(thickness);
        return (noOfPieces * (2 * ((widthMM + heightMM) - (2 * thicknessMM)) * thicknessMM * length * 7850)) / 1000
      },
      formula_weight: ({ width, height, thickness, length, weight }) => {
        const widthMM = parseFloat(width);
        const heightMM = parseFloat(height);
        const thicknessMM = parseFloat(thickness);
        return (weight * 1000) / (2 * ((widthMM + heightMM) - (2 * thicknessMM)) * thicknessMM * length * 7850)
      },
    },
    "Circular Hollow Sections": {
      inputs: ["Weight", "Pieces"],
      getDimensions: (inputMethod) => ['sectionSize', 'length', inputMethod === "Weight" ? "noOfPieces" : "weight"],
      formula: ({ outerDiameter, thickness, length, noOfPieces }) => {
        const outerDiameterMM = parseFloat(outerDiameter);
        const thicknessMM = parseFloat(thickness);
        return (noOfPieces * (Math.PI * (outerDiameterMM - thicknessMM) * thicknessMM * length * 7850)) / 1000
      },
      formula_weight: ({ outerDiameter, thickness, length, weight }) => {
        const outerDiameterMM = parseFloat(outerDiameter);
        const thicknessMM = parseFloat(thickness);
        return (weight * 1000) / (Math.PI * (outerDiameterMM - thicknessMM) * thicknessMM * length * 7850)
      }
    },
    "Flat Bars": {
      inputs: ["Weight", "Pieces"],
      getDimensions: (inputMethod) => ['thickness', 'width', 'length', inputMethod === "Weight" ? "noOfPieces" : "weight"],
      formula: ({ thickness, width, length, noOfPieces }) => {
        const thicknessPF = parseFloat(thickness);
        const widthPF = parseFloat(width);
        return (((thicknessPF * widthPF * length * 7.85) / 1000000) * noOfPieces) / 1000
      },
      formula_weight: ({ thickness, width, length, weight }) => {
        const thicknessPF = parseFloat(thickness); 
        const widthPF = parseFloat(width);
        return (weight * 1000) / ((thicknessPF * widthPF * length * 7.85) / 1000000)
      }
    },
    "I-Beams / Girders": {
      inputs: ["Weight", "Pieces"],
      getDimensions: (inputMethod) => ['sectionSize', 'length', inputMethod === "Weight" ? "noOfPieces" : "weight"],
      formula: ({ sectionalWeight, length, noOfPieces }) => (sectionalWeight * length * noOfPieces) / 1000,
      formula_weight: ({ sectionalWeight, length, weight }) => (weight * 1000) / (sectionalWeight * length),
    },
    "Narrow Parallel Flange Beam (NPB)": {
      inputs: ["Weight", "Pieces"],
      getDimensions: (inputMethod) => ['sectionSize', 'length', inputMethod === "Weight" ? "noOfPieces" : "weight"],
      formula: ({ sectionalWeight, length, noOfPieces }) => (sectionalWeight * length * noOfPieces) / 1000,
      formula_weight: ({ sectionalWeight, length, weight }) => (weight * 1000) / (sectionalWeight * length),
    },
    "Wide Parallel Flange Beam (WPB)": {
      inputs: ["Weight", "Pieces"],
      getDimensions: (inputMethod) => ['sectionSize', 'length', inputMethod === "Weight" ? "noOfPieces" : "weight"],
      formula: ({ sectionalWeight, length, noOfPieces }) => (sectionalWeight * length * noOfPieces) / 1000,
      formula_weight: ({ sectionalWeight, length, weight }) => (weight * 1000) / (sectionalWeight * length),
    },
    "Round Bars / Rods": {
      inputs: ["Weight", "Pieces"],
      getDimensions: (inputMethod) => ['diameter', 'length', inputMethod === "Weight" ? "noOfPieces" : "weight"],
      formula: ({ diameter, length, noOfPieces }) => {
        const diameterPF = parseFloat(diameter) / 1000;
        return (noOfPieces * (Math.PI * Math.pow(diameterPF / 2, 2) * length * 7850 * 10)) / 1000
      },
      formula_weight: ({ diameter, length, weight }) => {
        const diameterPF = parseFloat(diameter) / 1000;
        return (weight * 1000) / (Math.PI * Math.pow(diameterPF / 2, 2) * length * 7850 * 10)
      },
    },
    "TMT Bars": {
      inputs: ["Weight", "Pieces"],
      getDimensions: (inputMethod) => ['diameter', 'length', inputMethod === "Weight" ? "noOfPieces" : "weight"],
      formula: ({ diameter, length, noOfPieces }) => {
        const diameterPF = parseFloat(diameter) / 1000;
        return (noOfPieces * (Math.PI * Math.pow(diameterPF / 2, 2) * length * 7850)) / 1000
      },
      formula_weight: ({ diameter, length, weight }) => {
        const diameterPF = parseFloat(diameter) / 1000;
        return (weight * 1000) / (Math.PI * Math.pow(diameterPF / 2, 2) * length * 7850)
      },
    },
    "Nominal Bore Pipes": {
      inputs: ["Weight", "Pieces"],
      getDimensions: (inputMethod) => ['sectionSize', 'length', inputMethod === "Weight" ? "noOfPieces" : "weight"],
      formula: ({ outerDiameter, wallThickness, length, noOfPieces }) => {
        const outerDiameterMM = parseFloat(outerDiameter);
        const wallThicknessMM = parseFloat(wallThickness);
        return (noOfPieces * (Math.PI * (outerDiameterMM - wallThicknessMM) * wallThicknessMM * length * 7850)) / 1000
      },
      formula_weight: ({ outerDiameter, wallThickness, length, weight }) => {
        const outerDiameterMM = parseFloat(outerDiameter);
        const wallThicknessMM = parseFloat(wallThickness);
        return (weight * 1000) / (Math.PI * (outerDiameterMM - wallThicknessMM) * wallThicknessMM * length * 7850)
      }
    },
    "ERW Pipe": {
      inputs: ["Weight", "Pieces"],
      getDimensions: (inputMethod) => ['sectionSize', 'length', inputMethod === "Weight" ? "noOfPieces" : "weight"],
      formula: ({ outerDiameter, wallThickness, length, noOfPieces }) => {
        const outerDiameterMM = parseFloat(outerDiameter);
        const wallThicknessMM = parseFloat(wallThickness);
        return (noOfPieces * (Math.PI * (outerDiameterMM - wallThicknessMM) * wallThicknessMM * length * ERW_PIPE_DENSITY) / 1000)
      },
      formula_weight: ({ outerDiameter, wallThickness, length, weight }) => {
        const outerDiameterMM = parseFloat(outerDiameter);
        const wallThicknessMM = parseFloat(wallThickness);
        return (weight * 1000) / (Math.PI * (outerDiameterMM - wallThicknessMM) * wallThicknessMM * length * ERW_PIPE_DENSITY)
      },
    },
    "Polycarbonate Sheets": {
      inputs: ["Sqft"],
      getDimensions: (inputMethod) => ['length', 'width', "noOfPieces"],
      formula: ({ width, length, noOfPieces }) => {
        return length * width * noOfPieces
      },
    }
  };

  // const [inputMethod, setInputMethod] = useState(CATEGORIES[category] && CATEGORIES[category].inputs[0]);

  const dropdownRefs = useRef([]);
  const isFixedThicknessCategory = category === "C Purlin and Z Purlin";
  const defaultSixMeterCategories = new Set([
    "T-Sections (Angles)",
    "L-Section Equal Angles",
    "L-Section Unequal Angles",
    "C/U - Channels",
    "I-Beams / Girders",
    "Narrow Parallel Flange Beam (NPB)",
    "Wide Parallel Flange Beam (WPB)",
    "ERW Pipe",
    "Square Pipes",
    "Square Hollow Sections",
    "Rectangle Hollow Sections",
    "Circular Hollow Sections",
    "Round Pipes",
    "Nominal Bore Pipes",
  ]);
  const mildSteelPipeCategories = new Set([
    "ERW Pipe",
    "Square Pipes",
    "Round Pipes",
    "Square Hollow Sections",
    "Rectangle Hollow Sections",
    "Circular Hollow Sections",
    "Nominal Bore Pipes",
  ]);

  const buildDimValuesString = (updatedDimensions) => {
    if (updatedDimensions?.sectionSize) {
      return updatedDimensions.sectionSize;
    }

    return Object.entries(updatedDimensions)
      .filter(([key, val]) => val && ![
        "weight",
        "sectionalWeight",
        "outerDiameter",
        "wallThickness",
        "width",
        "height",
        "thickness",
        "length",
      ].includes(key))
      .map(([_, val]) => val)
      .join(" x ");
  };

  // Handle dimension changes
  const handleDimensionChange = (e) => {
    const { name, value } = e.target;
    setSuccess({ success: false, text: '' });

    setDimensions((prevDimensions) => {
      const updatedDimensions = {
        ...prevDimensions,
        [name]: value,
      };

      const dimValuesString = buildDimValuesString(updatedDimensions);
      setDimValues(dimValuesString);
      return updatedDimensions;
    });
  };


  useEffect(() => {
    const handleClickOutside = (event) => {
      const activeRefs = dropdownRefs.current.filter(Boolean);
      if (activeRefs.length > 0 && activeRefs.every((ref) => !ref.contains(event.target))) {
        setDrop(Array(5).fill(false));
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setDrop]);

  // Calculate weight
  const handleCalculate = () => {
    try {
      const categoryData = CATEGORIES[category];
      setSuccess({ success: null, text: '' });
      if (!categoryData) {
        setSuccess({ success: false, text: `Category not found` });
        return;
      }

      console.log(dimensions);

      const requiredDimensions = categoryData.getDimensions(inputMethod); // An array of required dimension keys
      const formula = categoryData.formula;
      const formulaWeight = categoryData.formula_weight;
      // Check if all required dimensions are present
      const missingDimensions = requiredDimensions.filter(
        (dim) => !dimensions[dim]
      );

      if (missingDimensions.length > 0) {
        setSuccess({ success: false, text: `Missing dimensions: ${convertCamelCaseToSpaced(missingDimensions.join(", "))}` });
        return;
      }

      const shouldAvoidRounding = category === "ERW Pipe";
      const truncateDecimals = (value, decimals) => {
        const factor = 10 ** decimals;
        return Math.trunc(value * factor) / factor;
      };
      const formatWeightValue = (value) =>
        shouldAvoidRounding
          ? truncateDecimals(value, 3).toFixed(3)
          : value.toFixed(category === "T-Sections (Angles)" ? 7 : 3);
      const formatPieceValue = (value) =>
        shouldAvoidRounding ? String(value) : value.toFixed(0);

      if (inputMethod === "Sqft") {
        const rawSqft = formula(dimensions);
        const calculatedWeight = formatWeightValue(rawSqft);
        setSqft(calculatedWeight);
        updateProductDetails(dimValues, weight, pieces, calculatedWeight, null);
      } else if (inputMethod === "Pieces") {
        const rawPieces = formulaWeight(dimensions);
        const calculatedPieces = formatPieceValue(rawPieces);
        setPieces(calculatedPieces)
        updateProductDetails(dimValues, weight, calculatedPieces, sqft, null);
      } else {
        const rawWeightMt = formula(dimensions);
        const calculatedWeight = formatWeightValue(rawWeightMt);
        const enteredPieces = dimensions.noOfPieces ?? dimensions.noOfSheets ?? dimensions.noOfCoils ?? dimensions.noOfSlittedCoils ?? null;
        setWeight(calculatedWeight);
        updateProductDetails(dimValues, calculatedWeight, enteredPieces, sqft, Number.isFinite(rawWeightMt) ? rawWeightMt * 1000 : null);
      }



    } catch (error) {
      setSuccess({ success: false, text: error.message });
      setWeight([]);
    }
  };

  const handleOpen = (index) => {
    const array = [...drop]
    array[index] = !array[index]
    setDrop(array)
  }

  const convertCamelCaseToSpaced = (str) => {
    return str.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/^./, (match) => match.toUpperCase());
  };

  const [focus, setFocus] = useState(Array(20).fill(false));

  const handleFocus = (index, e = null, isDropdown = false, hasSelection = false) => {
    const updatedFocus = [...focus];

    if (isDropdown) {
      // Set focus to true if a selection exists, otherwise false
      updatedFocus[index] = hasSelection;
    } else if (e?.target?.value !== undefined) {
      // For inputs, set focus based on the value
      updatedFocus[index] = e.target.value !== '';
    }

    setFocus(updatedFocus);
  };


  const updateProductDetails = (dimensions, weight, pieces, sqft, rawWeightKg = null) => {
    setDetails(prevState => {
      return prevState.map((detail, index) =>
        index === detailIndex
          ? { ...detail, dimensions, weight, pieces, sqft, rawWeightKg }
          : detail // Keep other objects unchanged
      );
    });
  };

  useEffect(() => {
    const defaultInputMethod = CATEGORIES[category] && CATEGORIES[category].inputs[0];
    setInputMethod(defaultInputMethod)

    const requiredDimensions = CATEGORIES[category]?.getDimensions(defaultInputMethod) || [];
    const initialDimensions = requiredDimensions.includes("length") && defaultSixMeterCategories.has(category)
      ? { length: "6" }
      : {};

    if (category === "C Purlin and Z Purlin") {
      const fixedDimensions = { ...initialDimensions, thickness: "1.5" };
      setDimensions(fixedDimensions);
      setDimValues(buildDimValuesString(fixedDimensions));
      return;
    }

    setDimensions(initialDimensions);
    setDimValues(buildDimValuesString(initialDimensions));
    updateProductDetails(buildDimValuesString(initialDimensions), weight, pieces, sqft, null);
  }, [category]); // Runs once on mount


  function getUnitLabel({ dim, product, category }) {
    const excludedDims = [
      "noOfSheets",
      "packetType",
      "noOfPackets",
      "totalQuantity",
      "noOfPieces",
      "noOfCoils",
      "noOfSlittedCoils"
    ];

    if (excludedDims.includes(dim)) return null;
    if (category === "Polycarbonate Sheets" && dim === "length") return " (ft)";
    if (category === "Polycarbonate Sheets" && dim === "width") return " (ft)";
    if (dim === "sectionSize") return null;
    if (dim === "length") return " (m)";
    if (dim === "weight" || dim === "weightPerCoil") return " (MT)";
    if (dim === "sectionalWeight") return " Kg/(m)";

    return " (mm)";
  }

  function getFieldHint({ dim, category }) {
    if (category === "Coils" && dim === "thickness") {
      return "Range of Coil Thickness : 0.30 mm to 20 mm";
    }

    if (category === "Coils" && dim === "width") {
      return "Range of Coil Width : 300 mm to 2000 mm";
    }

    if (category === "Coils" && dim === "weightPerCoil") {
      return "Maximum per Coil Weight : 30 M.T.";
    }

    if (category === "Slitted Coils" && dim === "thickness") {
      return "Range of Coil Thickness : 0.10 mm to 3 mm";
    }

    if (category === "Slitted Coils" && dim === "width") {
      return "Range of Coil Width : 300 mm to 2000 mm";
    }

    if (category === "Slitted Coils" && dim === "weightPerCoil") {
      return "Range of per Coil Weight : 0.100 M.T. to 3.000 M.T.";
    }

    return null;
  }

  const getDisplayedKgValue = () => {
    if (!weight) return "0";

    if (mildSteelPipeCategories.has(category)) {
      const rawWeightMt = CATEGORIES[category]?.formula?.(dimensions);
      if (Number.isFinite(rawWeightMt)) {
        return (rawWeightMt * 1000).toFixed(3);
      }
    }

    return (Number(weight) * 1000).toFixed(3);
  };


  return (
    <div className={styles.calculator}>
      <div className={styles.input_methods}>
        <h4 className='mb-0'>{category}</h4>
        {CATEGORIES[category]?.inputs?.slice(0, 2).map((input, index) => (
          <React.Fragment key={index}>
            {index === 1 && <span>or</span>}
            <button
              type="button"
              onClick={() => {
                setInputMethod(input);
              }}
              className={inputMethod === input ? styles.active : ""}
            >
              ({input})
            </button>
          </React.Fragment>
        ))}
      </div>
      <div className="row">
        {/* Category Selector */}

      </div>
      {(category === "Slitted Coils" || category === "C Purlin and Z Purlin") && (
        <div className="row">
          <div className="col-12">
            <div className="field-note">
              NOTE: ALL SLITTING PRODUCTS WILL BE DELIVERED WITH THE TRIMMING
            </div>
          </div>
        </div>
      )}
      {/* Dynamic Inputs based on Category */}
      {category &&
        <div className="row">
          {CATEGORIES[category] && CATEGORIES[category].getDimensions(inputMethod).map((dim, index) => (
            <div key={index} className="col-md-6 col-12">
              <div className="input-field w-100">
                {category === "Polycarbonate Sheets" && dim === "width" ? (
                  <div
                    className={`dropDown ${drop[0] ? "active" : ""}`}
                    ref={(el) => (dropdownRefs.current[0] = el)}
                  >
                    <div
                      className={`select ${dimensions[dim] ? "active" : ""}`}
                      onClick={() => {
                        handleOpen(0);
                      }}
                    >
                      <span>{dimensions[dim] ? `${dimensions[dim]} ft` : ""}</span>
                      <HiChevronDown className='drop-icon' />
                    </div>
                    <ul>
                      {[2, 4].map((option) => (
                        <li
                          key={option}
                          onClick={() => {
                            handleOpen(0);
                            handleDimensionChange({ target: { name: dim, value: String(option) } });
                            handleFocus(3 + index, null, true, true);
                          }}
                        >
                          {option} ft
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : category === "C/U - Channels" && dim === "sectionSize" ? (
                  <div
                    className={`dropDown ${drop[1] ? "active" : ""}`}
                    ref={(el) => (dropdownRefs.current[1] = el)}
                  >
                    <div
                      className={`select ${dimensions[dim] ? "active" : ""}`}
                      onClick={() => {
                        handleOpen(1);
                      }}
                    >
                      <span>{dimensions[dim] || ""}</span>
                      <HiChevronDown className='drop-icon' />
                    </div>
                    <ul>
                      {CHANNEL_SECTION_OPTIONS.map((option) => (
                        <li
                          key={option.label}
                          onClick={() => {
                            handleOpen(1);
                            setSuccess({ success: false, text: '' });
                            setDimensions((prevDimensions) => {
                              const updatedDimensions = {
                                ...prevDimensions,
                                sectionSize: option.label,
                                sectionalWeight: option.weight,
                              };

                              const dimValuesString = buildDimValuesString(updatedDimensions);
                              setDimValues(dimValuesString);
                              return updatedDimensions;
                            });
                            handleFocus(3 + index, null, true, true);
                          }}
                        >
                          {option.label}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : category === "T-Sections (Angles)" && dim === "sectionSize" ? (
                  <div
                    className={`dropDown ${drop[2] ? "active" : ""}`}
                    ref={(el) => (dropdownRefs.current[2] = el)}
                  >
                    <div
                      className={`select ${dimensions[dim] ? "active" : ""}`}
                      onClick={() => {
                        handleOpen(2);
                      }}
                    >
                      <span>{dimensions[dim] || ""}</span>
                      <HiChevronDown className='drop-icon' />
                    </div>
                    <ul>
                      {T_SECTION_OPTIONS.map((option) => (
                        <li
                          key={option.label}
                          onClick={() => {
                            handleOpen(2);
                            setSuccess({ success: false, text: '' });
                            setDimensions((prevDimensions) => {
                              const updatedDimensions = {
                                ...prevDimensions,
                                sectionSize: option.label,
                                width: option.width,
                                thickness: option.thickness,
                              };

                              const dimValuesString = buildDimValuesString(updatedDimensions);
                              setDimValues(dimValuesString);
                              return updatedDimensions;
                            });
                            handleFocus(3 + index, null, true, true);
                          }}
                        >
                          {option.label}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : category === "L-Section Equal Angles" && dim === "sectionSize" ? (
                  <div
                    className={`dropDown ${drop[2] ? "active" : ""}`}
                    ref={(el) => (dropdownRefs.current[2] = el)}
                  >
                    <div
                      className={`select ${dimensions[dim] ? "active" : ""}`}
                      onClick={() => {
                        handleOpen(2);
                      }}
                    >
                      <span>{dimensions[dim] || ""}</span>
                      <HiChevronDown className='drop-icon' />
                    </div>
                    <ul>
                      {EQUAL_ANGLE_OPTIONS.map((option) => (
                        <li
                          key={option.label}
                          onClick={() => {
                            handleOpen(2);
                            setSuccess({ success: false, text: '' });
                            setDimensions((prevDimensions) => {
                              const updatedDimensions = {
                                ...prevDimensions,
                                sectionSize: option.label,
                                sectionalWeight: option.weight,
                              };

                              const dimValuesString = buildDimValuesString(updatedDimensions);
                              setDimValues(dimValuesString);
                              return updatedDimensions;
                            });
                            handleFocus(3 + index, null, true, true);
                          }}
                        >
                          {option.label}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : category === "L-Section Unequal Angles" && dim === "sectionSize" ? (
                  <div
                    className={`dropDown ${drop[3] ? "active" : ""}`}
                    ref={(el) => (dropdownRefs.current[3] = el)}
                  >
                    <div
                      className={`select ${dimensions[dim] ? "active" : ""}`}
                      onClick={() => {
                        handleOpen(3);
                      }}
                    >
                      <span>{dimensions[dim] || ""}</span>
                      <HiChevronDown className='drop-icon' />
                    </div>
                    <ul>
                      {UNEQUAL_ANGLE_OPTIONS.map((option) => (
                        <li
                          key={option.label}
                          onClick={() => {
                            handleOpen(3);
                            setSuccess({ success: false, text: '' });
                            setDimensions((prevDimensions) => {
                              const updatedDimensions = {
                                ...prevDimensions,
                                sectionSize: option.label,
                                sectionalWeight: option.weight,
                              };

                              const dimValuesString = buildDimValuesString(updatedDimensions);
                              setDimValues(dimValuesString);
                              return updatedDimensions;
                            });
                            handleFocus(3 + index, null, true, true);
                          }}
                        >
                          {option.label}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : category === "I-Beams / Girders" && dim === "sectionSize" ? (
                  <div
                    className={`dropDown ${drop[4] ? "active" : ""}`}
                    ref={(el) => (dropdownRefs.current[4] = el)}
                  >
                    <div
                      className={`select ${dimensions[dim] ? "active" : ""}`}
                      onClick={() => {
                        handleOpen(4);
                      }}
                    >
                      <span>{dimensions[dim] || ""}</span>
                      <HiChevronDown className='drop-icon' />
                    </div>
                    <ul>
                      {I_BEAM_OPTIONS.map((option) => (
                        <li
                          key={option.label}
                          onClick={() => {
                            handleOpen(4);
                            setSuccess({ success: false, text: '' });
                            setDimensions((prevDimensions) => {
                              const updatedDimensions = {
                                ...prevDimensions,
                                sectionSize: option.label,
                                sectionalWeight: option.weight,
                              };

                              const dimValuesString = buildDimValuesString(updatedDimensions);
                              setDimValues(dimValuesString);
                              return updatedDimensions;
                            });
                            handleFocus(3 + index, null, true, true);
                          }}
                        >
                          {option.label}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : category === "Narrow Parallel Flange Beam (NPB)" && dim === "sectionSize" ? (
                  <div
                    className={`dropDown ${drop[4] ? "active" : ""}`}
                    ref={(el) => (dropdownRefs.current[4] = el)}
                  >
                    <div
                      className={`select ${dimensions[dim] ? "active" : ""}`}
                      onClick={() => {
                        handleOpen(4);
                      }}
                    >
                      <span>{dimensions[dim] || ""}</span>
                      <HiChevronDown className='drop-icon' />
                    </div>
                    <ul>
                      {NPB_OPTIONS.map((option) => (
                        <li
                          key={option.label}
                          onClick={() => {
                            handleOpen(4);
                            setSuccess({ success: false, text: '' });
                            setDimensions((prevDimensions) => {
                              const updatedDimensions = {
                                ...prevDimensions,
                                sectionSize: option.label,
                                sectionalWeight: option.weight,
                              };

                              const dimValuesString = buildDimValuesString(updatedDimensions);
                              setDimValues(dimValuesString);
                              return updatedDimensions;
                            });
                            handleFocus(3 + index, null, true, true);
                          }}
                        >
                          {option.label}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : category === "Wide Parallel Flange Beam (WPB)" && dim === "sectionSize" ? (
                  <div
                    className={`dropDown ${drop[4] ? "active" : ""}`}
                    ref={(el) => (dropdownRefs.current[4] = el)}
                  >
                    <div
                      className={`select ${dimensions[dim] ? "active" : ""}`}
                      onClick={() => {
                        handleOpen(4);
                      }}
                    >
                      <span>{dimensions[dim] || ""}</span>
                      <HiChevronDown className='drop-icon' />
                    </div>
                    <ul>
                      {WPB_OPTIONS.map((option) => (
                        <li
                          key={option.label}
                          onClick={() => {
                            handleOpen(4);
                            setSuccess({ success: false, text: '' });
                            setDimensions((prevDimensions) => {
                              const updatedDimensions = {
                                ...prevDimensions,
                                sectionSize: option.label,
                                sectionalWeight: option.weight,
                              };

                              const dimValuesString = buildDimValuesString(updatedDimensions);
                              setDimValues(dimValuesString);
                              return updatedDimensions;
                            });
                            handleFocus(3 + index, null, true, true);
                          }}
                        >
                          {option.label}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : category === "ERW Pipe" && dim === "sectionSize" ? (
                  <div
                    className={`dropDown ${drop[4] ? "active" : ""}`}
                    ref={(el) => (dropdownRefs.current[4] = el)}
                  >
                    <div
                      className={`select ${dimensions[dim] ? "active" : ""}`}
                      onClick={() => {
                        handleOpen(4);
                      }}
                    >
                      <span>{dimensions[dim] || ""}</span>
                      <HiChevronDown className='drop-icon' />
                    </div>
                    <ul>
                      {ERW_PIPE_OPTIONS.map((option) => (
                        <li
                          key={option.label}
                          onClick={() => {
                            handleOpen(4);
                            setSuccess({ success: false, text: '' });
                            setDimensions((prevDimensions) => {
                              const updatedDimensions = {
                                ...prevDimensions,
                                sectionSize: option.label,
                                outerDiameter: option.outerDiameter,
                                wallThickness: option.wallThickness,
                              };

                              const dimValuesString = buildDimValuesString(updatedDimensions);
                              setDimValues(dimValuesString);
                              return updatedDimensions;
                            });
                            handleFocus(3 + index, null, true, true);
                          }}
                        >
                          {option.label}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : category === "Square Pipes" && dim === "sectionSize" ? (
                  <div
                    className={`dropDown ${drop[4] ? "active" : ""}`}
                    ref={(el) => (dropdownRefs.current[4] = el)}
                  >
                    <div
                      className={`select ${dimensions[dim] ? "active" : ""}`}
                      onClick={() => {
                        handleOpen(4);
                      }}
                    >
                      <span>{dimensions[dim] || ""}</span>
                      <HiChevronDown className='drop-icon' />
                    </div>
                    <ul>
                      {SQUARE_PIPE_OPTIONS.map((option) => (
                        <li
                          key={option.label}
                          onClick={() => {
                            handleOpen(4);
                            setSuccess({ success: false, text: '' });
                            setDimensions((prevDimensions) => {
                              const updatedDimensions = {
                                ...prevDimensions,
                                sectionSize: option.label,
                                width: option.width,
                                thickness: option.thickness,
                              };

                              const dimValuesString = buildDimValuesString(updatedDimensions);
                              setDimValues(dimValuesString);
                              return updatedDimensions;
                            });
                            handleFocus(3 + index, null, true, true);
                          }}
                        >
                          {option.label}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : category === "Square Hollow Sections" && dim === "sectionSize" ? (
                  <div
                    className={`dropDown ${drop[4] ? "active" : ""}`}
                    ref={(el) => (dropdownRefs.current[4] = el)}
                  >
                    <div
                      className={`select ${dimensions[dim] ? "active" : ""}`}
                      onClick={() => {
                        handleOpen(4);
                      }}
                    >
                      <span>{dimensions[dim] || ""}</span>
                      <HiChevronDown className='drop-icon' />
                    </div>
                    <ul>
                      {SQUARE_PIPE_OPTIONS.map((option) => (
                        <li
                          key={option.label}
                          onClick={() => {
                            handleOpen(4);
                            setSuccess({ success: false, text: '' });
                            setDimensions((prevDimensions) => {
                              const updatedDimensions = {
                                ...prevDimensions,
                                sectionSize: option.label,
                                width: option.width,
                                thickness: option.thickness,
                              };

                              const dimValuesString = buildDimValuesString(updatedDimensions);
                              setDimValues(dimValuesString);
                              return updatedDimensions;
                            });
                            handleFocus(3 + index, null, true, true);
                          }}
                        >
                          {option.label}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : category === "Rectangle Hollow Sections" && dim === "sectionSize" ? (
                  <div
                    className={`dropDown ${drop[4] ? "active" : ""}`}
                    ref={(el) => (dropdownRefs.current[4] = el)}
                  >
                    <div
                      className={`select ${dimensions[dim] ? "active" : ""}`}
                      onClick={() => {
                        handleOpen(4);
                      }}
                    >
                      <span>{dimensions[dim] || ""}</span>
                      <HiChevronDown className='drop-icon' />
                    </div>
                    <ul>
                      {RECTANGLE_HOLLOW_SECTION_OPTIONS.map((option) => (
                        <li
                          key={option.label}
                          onClick={() => {
                            handleOpen(4);
                            setSuccess({ success: false, text: '' });
                            setDimensions((prevDimensions) => {
                              const updatedDimensions = {
                                ...prevDimensions,
                                sectionSize: option.label,
                                width: option.width,
                                height: option.height,
                                thickness: option.thickness,
                              };

                              const dimValuesString = buildDimValuesString(updatedDimensions);
                              setDimValues(dimValuesString);
                              return updatedDimensions;
                            });
                            handleFocus(3 + index, null, true, true);
                          }}
                        >
                          {option.label}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : category === "Circular Hollow Sections" && dim === "sectionSize" ? (
                  <div
                    className={`dropDown ${drop[4] ? "active" : ""}`}
                    ref={(el) => (dropdownRefs.current[4] = el)}
                  >
                    <div
                      className={`select ${dimensions[dim] ? "active" : ""}`}
                      onClick={() => {
                        handleOpen(4);
                      }}
                    >
                      <span>{dimensions[dim] || ""}</span>
                      <HiChevronDown className='drop-icon' />
                    </div>
                    <ul>
                      {CHS_PIPE_OPTIONS.map((option) => (
                        <li
                          key={option.label}
                          onClick={() => {
                            handleOpen(4);
                            setSuccess({ success: false, text: '' });
                            setDimensions((prevDimensions) => {
                              const updatedDimensions = {
                                ...prevDimensions,
                                sectionSize: option.label,
                                outerDiameter: option.outerDiameter,
                                thickness: option.thickness,
                              };

                              const dimValuesString = buildDimValuesString(updatedDimensions);
                              setDimValues(dimValuesString);
                              return updatedDimensions;
                            });
                            handleFocus(3 + index, null, true, true);
                          }}
                        >
                          {option.label}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : category === "Round Pipes" && dim === "sectionSize" ? (
                  <div
                    className={`dropDown ${drop[4] ? "active" : ""}`}
                    ref={(el) => (dropdownRefs.current[4] = el)}
                  >
                    <div
                      className={`select ${dimensions[dim] ? "active" : ""}`}
                      onClick={() => {
                        handleOpen(4);
                      }}
                    >
                      <span>{dimensions[dim] || ""}</span>
                      <HiChevronDown className='drop-icon' />
                    </div>
                    <ul>
                      {CHS_PIPE_OPTIONS.map((option) => (
                        <li
                          key={option.label}
                          onClick={() => {
                            handleOpen(4);
                            setSuccess({ success: false, text: '' });
                            setDimensions((prevDimensions) => {
                              const updatedDimensions = {
                                ...prevDimensions,
                                sectionSize: option.label,
                                outerDiameter: option.outerDiameter,
                                wallThickness: option.wallThickness,
                              };

                              const dimValuesString = buildDimValuesString(updatedDimensions);
                              setDimValues(dimValuesString);
                              return updatedDimensions;
                            });
                            handleFocus(3 + index, null, true, true);
                          }}
                        >
                          {option.label}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : category === "Nominal Bore Pipes" && dim === "sectionSize" ? (
                  <div
                    className={`dropDown ${drop[4] ? "active" : ""}`}
                    ref={(el) => (dropdownRefs.current[4] = el)}
                  >
                    <div
                      className={`select ${dimensions[dim] ? "active" : ""}`}
                      onClick={() => {
                        handleOpen(4);
                      }}
                    >
                      <span>{dimensions[dim] || ""}</span>
                      <HiChevronDown className='drop-icon' />
                    </div>
                    <ul>
                      {NOMINAL_BORE_OPTIONS.map((option) => (
                        <li
                          key={option.label}
                          onClick={() => {
                            handleOpen(4);
                            setSuccess({ success: false, text: '' });
                            setDimensions((prevDimensions) => {
                              const updatedDimensions = {
                                ...prevDimensions,
                                sectionSize: option.label,
                                outerDiameter: option.outerDiameter,
                                wallThickness: option.wallThickness,
                              };

                              const dimValuesString = buildDimValuesString(updatedDimensions);
                              setDimValues(dimValuesString);
                              return updatedDimensions;
                            });
                            handleFocus(3 + index, null, true, true);
                          }}
                        >
                          {option.label}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <input
                    type="number"
                    name={dim}
                    value={isFixedThicknessCategory && dim === "thickness" ? "1.5" : (dimensions[dim] ?? '')} // Ensures valid default value
                    onChange={(e) => { handleDimensionChange(e); handleFocus(3 + index, e); }}
                    id={convertCamelCaseToSpaced(dim)}
                    min={dim !== "weight" ? 0 : undefined}
                    step="0.01"
                    required={false} // Prevent "weight" from being required
                    disabled={isFixedThicknessCategory && dim === "thickness"}
                    readOnly={isFixedThicknessCategory && dim === "thickness"}
                  />
                )}
                <label htmlFor={convertCamelCaseToSpaced(dim)} className={focus[3 + index] || dimensions[dim] ? 'on-focus' : null}>
                  {category === "Polycarbonate Sheets" && dim === "width"
                    ? "Select width (ft)"
                    : category === "C/U - Channels" && dim === "sectionSize"
                    ? "Select Channel Size"
                    : category === "L-Section Equal Angles" && dim === "sectionSize"
                    ? "Select Angle Size"
                    : category === "L-Section Unequal Angles" && dim === "sectionSize"
                    ? "Select Unequal Angle Size"
                    : category === "I-Beams / Girders" && dim === "sectionSize"
                    ? "Select Beam Size"
                    : category === "Narrow Parallel Flange Beam (NPB)" && dim === "sectionSize"
                    ? "Select NPB Size"
                    : category === "Wide Parallel Flange Beam (WPB)" && dim === "sectionSize"
                    ? "Select WPB Size"
                    : category === "ERW Pipe" && dim === "sectionSize"
                    ? "Select ERW Pipe Size"
                    : category === "Square Pipes" && dim === "sectionSize"
                    ? "Select Square Pipe Size"
                    : category === "Square Hollow Sections" && dim === "sectionSize"
                    ? "Select Square Hollow Section Size"
                    : category === "Rectangle Hollow Sections" && dim === "sectionSize"
                    ? "Select RHS Size"
                    : category === "Circular Hollow Sections" && dim === "sectionSize"
                    ? "Select CHS Size"
                    : category === "Round Pipes" && dim === "sectionSize"
                    ? "Select Round Pipe Size"
                    : category === "Nominal Bore Pipes" && dim === "sectionSize"
                    ? "Select NB Pipe Size"
                    : `${convertCamelCaseToSpaced(dim)}${getUnitLabel({ dim, product, category }) || ''}`}
                </label>
                {getFieldHint({ dim, category }) && (
                  <small className="field-hint">{getFieldHint({ dim, category })}</small>
                )}
              </div>
            </div>
          ))}
        </div>
      }

      {/* Calculate */}
      {success.text !== '' ? <p className='mb-3 mt-0' style={success.success ? { color: "green", fontSize: ".8em" } : { color: "red", fontSize: ".8em" }}>{success.text}</p> : null}
      {CATEGORIES[category] && <div className="d-flex align-items-center flex-wrap mb-3" style={{ gap: "15px" }}>
        <button type='button' onClick={() => { handleCalculate() }} className='button2 me-2 rounded-0'>
          Calculate
        </button>
        <div className='d-flex align-items-start flex-column' style={{ gap: "10px" }}>
          {weight &&
            <h5>
              <b>Weight:</b> {weight} MT or {getDisplayedKgValue()} kg
            </h5>
          }
          {sqft &&
            <h5><b>Sqft:</b> {sqft}</h5>
          }
          {pieces &&
            <h5><b>No Pieces:</b> {pieces}</h5>
          }
        </div>
      </div>}

      {/* Display the Result */}

    </div>
  );
};
export default Calculator;
