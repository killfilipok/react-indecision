import React from 'react'
import AddOption from './AddOption.js'
import Action from './Action.js'
import Header from './Header.js'
import Options from './Options.js'
import OptionModal from './OptionModal.js'

export default class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    }

    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }))
    }

    handleUnselectOption = () => {
        this.setState(() => ({ selectedOption: undefined }))
    }

    pickOne = () => {
        const randNum = Math.floor(Math.random() * this.state.options.length)
        this.setState(() => ({
            selectedOption: this.state.options[randNum]
        }))
    }

    handleDeleteOption = (targOption) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => option !== targOption)
        }))
    }

    handleAddOption = (option) => {
        if (!option) {
            return 'Enter valid value to add item'
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exist'
        }

        this.setState((prevState) => ({
            options: prevState.options.concat(option)
        }))
    }

    componentDidMount() {
        try {
            const json = localStorage.getItem('options')
            const options = JSON.parse(json)

            if (options) {
                this.setState(() => ({ options }))
            }
        } catch (e) {

        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options', json)
        }
    }
    componentWillUnmount() {
        console.log('componentWillUnmount')
    }

    render() {
        const subtitle = 'Put your life in the hands of a computer';

        return (
            <div>
                <Header subtitle={subtitle} />
                <div className="container">
                    <Action
                        hasOptions={this.state.options.length > 0}
                        pickOne={this.pickOne}
                    />
                    <div className="widget">
                        <Options
                            options={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOption
                            handleAddOption={this.handleAddOption}
                        />
                        <OptionModal
                            selectedOption={this.state.selectedOption}
                            handleUnselectOption={this.handleUnselectOption}
                        />
                    </div>
                </div>
            </div>
        );
    }
}