import React, {Component} from 'react'
// import Button from 'react-bootstrap/Button'
// import { Formik } from 'formik';
// import Form from 'react-bootstrap/Form'

function CalcScreen (props) {
    return (
        <div onClick={props.clickOnCalcScreen} className="calcScreen">
            {props.resultOnScreen}
        </div>
    )
}

function Button (props) {
    return (
        <button 
        onClick={() =>  props.clickOnButton(props.buttonValue)} 
        className="btn someButton"
        >
            {props.buttonValue}
            
        </button>
    )
}

function CalcCover (props) {
    return (
        <div className="silver">
            {props.children}
        </div>)
}

 


class Calc extends Component {
    constructor(props) {
        super(props)
        this.state = {
            screenResult: 0,
        }

        this.clickOnButton = this.clickOnButton.bind(this)
        this.clearScreen = this.clearScreen.bind(this)
        // this.evalScreen = this.evalScreen.bind(this)
        // this.clickOnButton22 = this.clickOnButton22.bind(this)
        this.getAnswerSlim = this.getAnswerSlim.bind(this)
    }

    clickOnButton(e) {      
        let middleResultTwo = this.doRegExp(this.state.screenResult + e)
        middleResultTwo = middleResultTwo.replace(/\s{2}/g, ' ')

        this.setState({
            // screenResult: this.doRegExp(this.state.screenResult + e)
            screenResult: middleResultTwo
        })        

        // console.log('this.doRegExp(this.state.screenResult + e):', this.doRegExp(this.state.screenResult + e))
        console.log('middleResultTwo:', middleResultTwo)
    }     

    doRegExp(string) {
        let middleStr = string;

        // ÷ > /
        middleStr = middleStr.replace(/÷/g, '/')
        //begin of string 00 > 0
        middleStr = middleStr.replace(/^0+/, '0')
        //begin > 02 > 2
        middleStr = middleStr.replace(/^0(\d|[(])/, '$1')
        //012 > 12; + 02 > + 2
        // 3 + 03 / 0.03 > 3 + 3 / 0.03 
        middleStr = middleStr.replace(/([+-]|\/|\*)\s*0(\d)/, '$1 $2');
        //++ -- ÷÷ *** +-÷  > + - * ÷
        middleStr = middleStr.replace(/(\s*\+\s*|\s*-\s*|\s*\/\s*|\s*\*\s*)+/g, ' $1 '); 
        // .... > . > (( > ( > )) > )
        middleStr = middleStr.replace(/(\.|\(|\))+/g, '$1');        

        //for the future      
        //begin > ) > (
        // middleStr = middleStr.replace(/^0\)/, '(');
        //() > ' '
        // middleStr = middleStr.replace(/\(\)/, ' ');
        //end for the future      

        //431.55.66 + 1.2.3 > 431.5566 + 1.23
        middleStr = middleStr.replace(/(\d+\.\d+)\./g, '$1');
        //.7 > 0.7
        middleStr = middleStr.replace(/[^\d]\./, ' 0.');
        middleStr = middleStr.replace(/^\./, '0.');
        //7. + > 7 + 
        middleStr = middleStr.replace(/([\d])\.\s/g, '$1');

        //to do 
        //-6 / 3 >
        //-6 * 6 >
        //DOM > 3     +     9 > 3+9

        //not used
        // '' * 5 > 5 * 5  ; ÷ 5 > 5 ÷ 5
        middleStr = middleStr.replace(/^\s*(\*|÷)\s*(\d+)/, '$2 $1 $2 ');

        //'ERROR (NaN)' > ''
        middleStr = middleStr.replace(/ERROR \(NaN\)/, '')


         //begin > -3 > 0 - 3
        //  middleStr = middleStr.replace(/^-(\d)/, '0 - $1')
        

        //begin > -3 > 0 - 3
        // middleStr = middleStr.replace(/^-(\d*)/, '0 - $1')

        //begin > -3 > 3
        // middleStr = middleStr.replace(/^-\s*(\d*)/, '0-$1')

        return middleStr           
        // return console.log('middleStr:', middleStr)
    }
 

    
    getAnswerSlim () {
       
        let  inp = '' + this.state.screenResult
        // let inp = '-3'

        //begin > -3 > 0 - 3
        // inp = inp.replace(/^-(\d*)/, '0 - $1')        

        //end of string > 9 - > 9
        inp = inp.replace(/(.*)\s*-\s*$/, '$1')

        // 5 * > 5 * 5
        // 5 / > 5 / 5        
        inp = inp.replace(/^(\d+)\s*(\*|\/)\s*$/, '$1 $2 $1 ');
        
        
        //begin > -3 > 3
        inp = inp.replace(/^\s*-\s*(\d*)/, '0-$1')

        // *|/ end > ''
        inp = inp.replace(/\s*[\*|\/]\s*$/, '')



        console.log(inp)
        // console.log('typeof(inp):', typeof(inp))
        // console.log('inp.split():', inp.split(''))
        
        // return

        
        const addSpaces = inp.replace(/([^\d\.])/g, ' $1 ')
        // console.log('addSpaces:', addSpaces)
        // return
        

        let arr = addSpaces.split(' ').filter(e => e !== '') 
        // let arr = arr.split(' ').filter(e => e !== '') 
        console.log('arr:', arr)
        
        let  result;

    // return

    // arr = ['0','-','3','+','5']

        arr.forEach((e, i) => {
            if (e === '*') {
                arr[i+1] *= arr[i-1]
                arr[i-1] = arr[i] = null
            } 
            if (e === '/') {
                arr[i+1] = arr[i-1] / arr[i+1]
                arr[i-1] = arr[i] = null
            }
            e === '+' && (arr[i] = null)
        })
         
        arr = arr.filter(e => e !== null)

        arr.forEach((e, i) => {
            if (e === '-') {
                arr[i+1] = arr[i-1] - arr[i+1]
                arr[i-1] = arr[i] = null}
        })

        arr = arr.map(e => Number(e))
        
        result = arr.reduce((sum, current) => sum + current, 0); 

        console.log('result:', result)
        console.log('typeof(inp):', typeof(result))

        console.log('isNaN(result):', isNaN(result))

        if (isNaN(result)) {
            this.setState({
                screenResult: 'ERROR (NaN)'
            })
        } else {            
            this.setState({
                screenResult: result
            })
        }
        

    }


    // clickOnButton22() {
    //     this.getAnswerSlim()
    // }

    clearScreen() {
        this.setState({
            screenResult: 0
        })
    }
 
    
    render() {

        
        return (<div>            
            <CalcCover className="container-fluid">
            
                <CalcScreen clickOnCalcScreen={this.getAnswerSlim} resultOnScreen={this.state.screenResult} />
                
                <hr />
                {/* <Button buttonValue="." clickOnButton={this.clickOnButton} /> */}
                <Button buttonValue="7" clickOnButton={this.clickOnButton} />
                <Button buttonValue="8" clickOnButton={this.clickOnButton} />
                <Button buttonValue="9" clickOnButton={this.clickOnButton} />
                
                <Button buttonValue=" ÷ " clickOnButton={this.clickOnButton} />
                {/* <Button buttonValue="." clickOnButton={this.clickOnButton} /> */}
                <br />
                {/* <Button buttonValue="." clickOnButton={this.clickOnButton} /> */}
                <Button buttonValue="4" clickOnButton={this.clickOnButton} />
                <Button buttonValue="5" clickOnButton={this.clickOnButton} />
                <Button buttonValue="6" clickOnButton={this.clickOnButton} />
                <Button buttonValue=" * " clickOnButton={this.clickOnButton} />
                {/* <Button buttonValue="." clickOnButton={this.clickOnButton} /> */}
                <br />
                {/* <Button buttonValue="." clickOnButton={this.clickOnButton} /> */}
                <Button buttonValue="1" clickOnButton={this.clickOnButton} />
                <Button buttonValue="2" clickOnButton={this.clickOnButton} />
                <Button buttonValue="3" clickOnButton={this.clickOnButton} />
                <Button buttonValue=" - " clickOnButton={this.clickOnButton} />
                {/* <Button buttonValue="." clickOnButton={this.clickOnButton} />  */}
                <br />
                {/* <div className="someButtonTwo"></div> */}
                <Button buttonValue="0" clickOnButton={this.clickOnButton} />
                {/* <div className="someButtonTwo"></div> */}
                <br />
                {/* <Button buttonValue="." clickOnButton={this.clickOnButton} /> */}
                <Button buttonValue="C" clickOnButton={this.clearScreen} />
                <Button buttonValue="=" clickOnButton={this.getAnswerSlim} />
                <Button buttonValue="." clickOnButton={this.clickOnButton} />
                <Button buttonValue=" + " clickOnButton={this.clickOnButton} />
                <br />
                
            </CalcCover>            
        </div>)
    }
}

export default Calc