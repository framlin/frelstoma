import React, { Component } from 'react';
import PartialHeader from './partial_header';
import SectionList from './section_list';

var id = 0;

class PartialList extends Component {

    renderPartialList() {
        if (!this.props.part.partials) {
            return (
                ""
            )
        }
        return this.props.part.partials.map(function(partial) {
            id++;
            return (
                <li key={id} className="partial-list-entry">
                    <PartialHeader partial={partial}/>
                    <SectionList sections={partial.sections}/>
                </li>
            )
        })
    }

    render() {

        return (
            <ul className="list-unstyled partial-list" >
                {this.renderPartialList()}
            </ul>
        );
    }
}

export default PartialList ;

/*
partials: [
    {
        name: "STM32F429ZIT6U",
        description: [
            {
                section: "Documentation",
                entries: [
                    {
                        type: 'link',
                        target: "http://www.st.com/en/microcontrollers/stm32f429zi.html",
                        value: "Product-Page"
                    },
                    {
                        type: 'link',
                        target: "http://www.st.com/content/ccc/resource/technical/document/user_manual/2f/71/ba/b8/75/54/47/cf/DM00105879.pdf/files/DM00105879.pdf/jcr:content/translations/en.DM00105879.pdf",
                        value: "UM1725 - STM32F4 User Manual: Description of STM32F4xx HAL drivers (PDF)"
                    }
                ]
            }
        ]
    }
]
*/
