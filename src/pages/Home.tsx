import React from 'react';
import img from '../assets/img/cuttree.jpg';
import { IPage } from '../interfaces';

export function Home({ color }: IPage) {
    return (
        <div>
            <div className="text-center mt-3">
                <h1 className={`header text-${color} text-uppercase display-4`}>React-Typescript</h1>
                <img src={img} className="my-5" alt="sada" />
                <p className="mt-3 secondaryHeader">The color of this page is: {color}</p>
            </div>
        </div>
    );
}
