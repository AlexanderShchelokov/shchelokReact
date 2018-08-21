import React from 'react';


export default class Counter extends React.Component {
    constructor () {
        super();

        this.state = {
            count: 0,
            interval: 1000
        }
    }

    incState = () => {
        this.setState({
            count:  this.state.count + 1
        })          
    }

    reset = () => {
        this.setState({
            count: 0
        })
    }

    startCounting = () => { 
        clearInterval(this.timer); 
        this.timer = setInterval(() => { 
            this.incState() 
        },  
        this.state.interval) 
    }

    stopCounting = () => {
        clearInterval(this.timer);   
    }

    render() {
        return (
           <div>
                <div>{this.state.count}</div>
                <button onClick={() => this.incState()}>Увеличить на 1</button>
                <button onClick={() => this.reset()}>Сбросить</button>
                <button onClick={() => this.startCounting()}>Запустить счетчик</button>
                <button onClick={() => this.stopCounting()}>Остановить счетчик</button>
          </div>
        );
    }


}