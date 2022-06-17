import React from 'react';
import './Tips.css';
import matequilla from '../../../assets/img/Mantequilla-Acercade.png';
import ingredientes from '../../../assets/img/Ingredientes-Acercade.png'
import batir from '../../../assets/img/Batir-Acercade.png';
import sal from '../../../assets/img/Sal-Acercade.png'
import horno from '../../../assets/img/Horno-Acercade.png';
function acercade() {
    return (
        <section id="tips-container">
        <h2 className="title">Algunos Tips...</h2>
        <div class="tips">
            <div class="width">
                <div class="first-card">
                <img src={matequilla} alt="matequilla"/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus consectetur ad quas ea sequi
                        error beatae nisi commodi suscipit vel.</p>
                </div>
                <div class="second-card">
                <img src={ingredientes} alt="ingredientes" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus consectetur ad quas ea sequi
                        error beatae nisi commodi suscipit vel.</p>
                </div>
            </div>
            <div class="width">
                <div class="third-card">
                <img src={batir} alt="batir"/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus consectetur ad quas ea sequi
                        error beatae nisi commodi suscipit vel.</p>
                </div>
                <div class="fourth-card">
                <img src={sal} alt="sal"/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus consectetur ad quas ea sequi
                        error beatae nisi commodi suscipit vel.</p>
                </div>
            </div>
        </div>
        <div class="fifth-card">
        <img src={horno} alt="horno"/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus consectetur ad quas ea sequi
                error beatae nisi commodi suscipit vel.</p>
        </div>
    </section>
    );
}
export default acercade;