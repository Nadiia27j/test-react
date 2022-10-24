import React from 'react';

class Counter extends React.Component {

    static defaultProps = {
        initialValue: 0,
    };

    static propTypes = {

    };
    // constructor() {
    //     super();

    //   this.state = {
    //     value: 0,
    //   };
    // }
   //   те саме замість конструктора------

    state = {
        value: this.props.initialValue,
    };

    // -------публічна властивість--------------
    // handelIncrement = (event) => {
    //     console.log('клік по збільшити');
    //     const target = event.target;

    //     setTimeout(() => {
    //         console.log(target);
    //     },1000);
    // };

    handelIncrement = () => {
      //   -----  перезаписати значення------
        // this.setState({value: 123});

        // ------від попереднього додати значення-----
        this.setState(prevState => ({
            value: prevState.value + 1,
        }));
    };


    handelDecrement = () => {
        this.setState(prevState => ({
            value: prevState.value - 1,
        }));
    }

    render() {
        return (
            <div className='Counter'>
                <span className='Counter__value'>{this.state.value}</span>

                <div className='Counter__controls'>
                    <button type='button' 
                    onClick={this.handelIncrement}>Збільшити на 1</button>
                    <button type='button'
                    onClick={this.handelDecrement}>Зменшити на 1</button>
                </div>
            </div>
        )
    }
}

export default Counter;