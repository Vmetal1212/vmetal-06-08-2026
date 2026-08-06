import React, { useEffect, useRef, useState } from 'react';
import { HiChevronDown } from "react-icons/hi";
import styles from '@/app/styles/inquiry.module.css'
import Calculator from './Calculator';
import new_category from '@/utils/category.json'
import { IoIosClose } from 'react-icons/io'

import data from '@/utils/inquiry.json'

const ProductInquiry = ({
    detailIndex,
    details,
    setDetails,
}) => {
    const [drop, setDrop] = useState(Array(5).fill(false));
    const [categories, setCategories] = useState([]);
    const [brands, setBrands] = useState([]);
    const [services, setServices] = useState([]);
    const [product, setProduct] = useState(null);
    const [service, setService] = useState(null);
    const [category, setCategory] = useState(null);
    const [brand, setBrand] = useState([]);
    const [weight, setWeight] = useState(null);
    const [sqft, setSqft] = useState(null);
    const [pieces, setPieces] = useState(null);
    const [dimValues, setDimValues] = useState('');
    const [dimensions, setDimensions] = useState({});
    const [inputMethod, setInputMethod] = useState(null);
    const dropdownRefs = useRef([]);

    const [AllProducts, setAllProducts] = useState([
        "Hot Rolled (HR)",
        "Hot Rolled Pickled & Oiled (HRPO)",
        "Cold Rolled (CR)",
        "Cold Rolled Closed Annealed (CRCA)",
        "Galvanized Iron (GI) / Galvanized Plates (GP)",
        "Pre-Painted Galvanized Iron (PPGI)",
        "Polycarbonate Sheets",
        "Pre-Painted Galvalume (PPGL)",
        "Mill Plates (PMP Plates)",
        "Mild Steel Structures",
        "Mild Steel Pipes",
        "Nominal Bore Pipe",
        "ERW Pipe"
    ]);


    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRefs.current.every(ref => ref && !ref.contains(event.target))) {
                setDrop(Array(5).fill(false));
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [setDrop]);


    const handleOpen = (index) => {
        const array = [...drop]
        array[index] = !array[index]
        setDrop(array)
    }

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



    const updateProductDetails = (product, category, service, brand) => {
        setDetails(prevState => {
            const updatedDetails = [...prevState];
            updatedDetails[detailIndex] = {
                product: product,
                category: category,
                service: service,
                brands: brand,
                dimensions: null,
                weight: null,
                pieces: null,
                rawWeightKg: null,
            };
            return updatedDetails;
        });
    };

    useEffect(() => {
        updateProductDetails(product, category, service, brand)
    }, [])

    const handleCategoryService = (product) => {
        // Update categories, ensuring no duplicates
        const updatedCategories = Array.from(new Set(
            data
                .filter(item => product === item.product)
                .map(item => item.categories)
                .flat()
        ));

        const updatedBrands = Array.from(new Set(
            data
                .filter(item => product === item.product)
                .map(item => item.brands || [])
                .flat()
                .filter(Boolean)
        ));

        setBrands(updatedBrands);
        setCategories(updatedCategories);
    }


    const handleProduct = (item) => {
        setProduct(item)
        handleCategoryService(item)
        setCategory(null)
        setBrand([])
        setService(null)
        updateProductDetails(item, null, null, [])
    }

    const handleCategory = (category) => {
        setCategory(category)
        const updatedServies = Array.from(new Set(
            new_category
                .filter(item => category === item.category)
                .map(item => item.services)
                .flat()
        ));
        setServices(updatedServies)
        setService(null)
        setWeight(null)
        setPieces(null)
        setSqft(null)
        setDimValues('')
        setDimensions({})
        setInputMethod(null)
        updateProductDetails(product, category, null, brand)
    }

    const handleService = (item) => {
        setService(item)
        updateProductDetails(product, category, item, brand)
    }

    const handleBrand = (item) => {
        const prevArray = [...brand]
        const brandArray = [...prevArray, item]
        setBrand(brandArray)
        setBrands(prev => prev.filter((_) => _ !== item))
        updateProductDetails(product, category, service, brandArray)
    }

    const handleDeleteBrand = (item, index) => {
        const brandArray = brand.filter((brand, i) => i !== index)
        setBrand(brandArray)
        setBrands(prev => [...prev, item])
        updateProductDetails(product, category, service, brandArray)
    }


    const deleteProduct = () => {
        setDetails(prev => prev.filter((_, i) => i !== detailIndex))
    }

    return (
        <div className='row'>
            <div className="col-12 d-flex align-items-end justify-content-end">
                <div onClick={deleteProduct} className='mt-2' style={{ color: "red", width: "fit-content", textDecoration: "underline", fontSize: ".85em", cursor: "pointer" }} >Remove</div>
            </div>
            <div className="col-md-6 col-12">
                <div className="input-field">
                    <div className={`dropDown mb-0 ${drop[0] ? "active" : null}`} ref={el => (dropdownRefs.current[0] = el)}>
                        <div className={`select ${product !== '' ? 'active' : null}`} onClick={() => { handleOpen(0) }}>
                            <span>{product}</span><HiChevronDown className='drop-icon' />
                        </div>
                        <ul style={{ zIndex: "9999" }}>
                            {AllProducts && AllProducts.map((item, index) => {
                                return <li key={index} onClick={() => { handleOpen(0); handleProduct(item) }}>{item}</li>
                            })}
                        </ul>
                        <label htmlFor="product" className={focus[6] || product ? 'on-focus' : null}>Select a Product</label>
                    </div>
                </div>
            </div>

            <div className="col-md-6">
                <div className="input-field">
                    <div className={`dropDown ${drop[1] ? "active" : null}`} ref={el => (dropdownRefs.current[1] = el)}>
                        <div className={`select ${category !== '' ? 'active' : null}`}
                            onClick={(e) => { handleOpen(1); }}>
                            <span>{category}</span><HiChevronDown className='drop-icon' />
                        </div>
                        <ul style={{ zIndex: "9999" }}>
                            {categories.map((categoryName) => (
                                <li key={categoryName}
                                    onClick={() => {
                                        handleCategory(categoryName);
                                        handleOpen(1)
                                    }}>{categoryName}</li>
                            ))}
                        </ul>
                        <label htmlFor="category" className={focus[7] || category ? 'on-focus' : null}>Select a Category</label>
                    </div>
                </div>
            </div>

            {/* Services Selector */}
            {services.length > 0 && <div className="col-md-6 col-12">
                <div className="input-field">
                    <div className={`dropDown ${drop[2] ? "active" : null}`} ref={el => (dropdownRefs.current[2] = el)}>
                        <div className={`select ${service !== '' ? 'active' : null}`} onClick={(e) => { handleOpen(2); }}>
                            <span>{service}</span><HiChevronDown className='drop-icon' />
                        </div>
                        <ul>
                            {services && services.map((item, index) => {
                                return <li key={index} onClick={() => {
                                    handleOpen(2);
                                    handleService(item)
                                }}>{item}</li>
                            })}
                        </ul>
                        <label htmlFor="services" className={focus[8] || service ? 'on-focus' : null}>Select a Service</label>
                    </div>
                </div>
            </div>}


            {brands.length > 0 && <div className="col-md-6">
                <div className="input-field">
                    <div className={`dropDown ${drop[3] ? "active" : null}`} ref={el => (dropdownRefs.current[3] = el)}>
                        <div className={`select ${brands !== '' ? 'active' : null}`}
                            onClick={(e) => {
                                handleOpen(3);
                            }}>
                            <span></span><HiChevronDown className='drop-icon' />
                        </div>
                        <ul>
                            {brands.map((item) => (
                                <li key={item}
                                    onClick={() => {
                                        handleBrand(item)
                                        handleOpen(3);
                                    }}>{item}</li>
                            ))}
                        </ul>
                        <label htmlFor="brand" className={focus[9] ? 'on-focus' : null}>Brands</label>
                    </div>
                    <div className="multiple">
                        {brand && brand.map((item, index) => {
                            return <span key={index}>{item} <IoIosClose onClick={() => { handleDeleteBrand(item, index) }} /></span>
                        })}
                    </div>
                </div>
            </div>}

            {category &&
                <Calculator
                    product={product}
                    sqft={sqft}
                    setSqft={setSqft}
                    inputMethod={inputMethod}
                    setInputMethod={setInputMethod}
                    detailIndex={detailIndex}
                    category={category}
                    weight={weight}
                    setWeight={setWeight}
                    pieces={pieces}
                    setPieces={setPieces}
                    setDetails={setDetails}
                    dimValues={dimValues}
                    setDimValues={setDimValues}
                    dimensions={dimensions} setDimensions={setDimensions}
                />}

        </div>
    );
};
export default ProductInquiry;
