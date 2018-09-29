import React, { Component } from 'react';
import Photo from "../../components/photo";
import './styles.scss';

export default class Gallery extends Component {

    constructor(props) {
        super(props);
        this.state = {
            images: [
                {
                    url : "images/img1.jpg",
                    id : "img1",
                    caption : "Amazing location"
                },
                {
                    url : "images/img2.jpg",
                    id : "img2",
                    caption : "This is caption text"
                },
                {
                    url : "images/img3.jpg",
                    id : "img3",
                    caption : "This is caption text"
                },
                {
                    url : "images/img3.jpg",
                    id : "img4",
                    caption : "This is caption text"
                }
            ]
        }
    };

    renderGalaryItems = () => {
        const items = _.map(this.state.images, item => {

            return (<Photo {...item} key={item.id}/>)
        });
        return (
            <div className="photos">{items}</div>
        )
    };
    render() {
        return (
            <div className="photo-gallery">
                <div class="title"> Photo Gallery </div>
                {this.renderGalaryItems()}
            </div>
        );
    }
}