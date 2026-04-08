

import { useState } from 'react';
import Button from './components/Button';
import Input from './components/Input/index';
import {Container, Content, Row} from './styles';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState ('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');
  
  const handleOnClear = () => {
    setCurrentNumber('0')
    setFirstNumber('0')
    setOperation('')
  };

  const handleAddNumber = (num ) => {
      console.log('number', num)
    setCurrentNumber(prev => {
      if (prev.includes(num)) return prev; 
      return prev === '0' ? num : prev + num; 
    })
  }

  const handleAddDecimal = () => {
    setCurrentNumber(prev => {
      if (prev.includes('.')) return prev; 
      return prev + '.';
    })
  }
  const handleSumNumbers = () => {
    if(firstNumber ==='0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('+')
    }else{
      console.log(Number(firstNumber), Number(currentNumber))
      const sum = Number(firstNumber) + Number(currentNumber)
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }
  const handleMinusNumbers = () => {
    if(firstNumber ==='0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('-')
    }else{
      console.log('minus')
      const sum = Number(firstNumber) - Number(currentNumber)
      setCurrentNumber(String(sum))
      
    }
  }
  const handleTimesNumbers = () => {
    if(firstNumber ==='0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('*')
    }else{
      console.log('Times')
      const sum = Number(firstNumber) * Number(currentNumber)
      setCurrentNumber(String(sum))
      
    }
  }
   const handleBorderNumbers = () => {
    if(firstNumber ==='0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('/')
    }else{
      console.log('Border')
      const sum = Number(firstNumber) / Number(currentNumber)
      setCurrentNumber(String(sum))
      
    }
  }
  
  const handleEquals = () => {
    if(firstNumber !== '0' && operation !== '' && currentNumber !== '0'){
      let result;
      switch(operation){
        case'+':
          result = Number(firstNumber) + Number(currentNumber);
          break;
         case'-':
          result = Number(firstNumber) - Number(currentNumber);
          break;
        case'*':
          result = Number(firstNumber) * Number(currentNumber);
          break;
        case'/':
          result = Number(firstNumber) / Number(currentNumber);
          break;
        default:
          return;
      }
      setCurrentNumber(String(result));
      setFirstNumber('0');
      setOperation('');
    }
  }
  
  return (
    <Container>
           <Content>
            <Input value={currentNumber}/>
            <Row>
            <Button label= "." onClick={handleAddDecimal} /> 
             <Button label= "/" onClick={handleBorderNumbers}/> 
             <Button label= "C" onClick={handleOnClear}/> 
             <Button label= "X" onClick={handleTimesNumbers}/> 
            </Row>
            <Row>
            <Button label= "9" onClick={() => handleAddNumber('9')}/> 
             <Button label= "8" onClick={() => handleAddNumber('8')}/> 
             <Button label= "7" onClick={() => handleAddNumber('7')}/> 
             <Button label= "-" onClick={handleMinusNumbers}/> 
            </Row>
              <Row> 
              <Button label= "4" onClick={() => handleAddNumber('4')}/>
              <Button label= "5" onClick={() => handleAddNumber('5')}/> 
              <Button label= "6" onClick={() => handleAddNumber('6')}/> 
              <Button label= "+" onClick={handleSumNumbers}/> 
            </Row>
              <Row> 
              <Button label= "1" onClick={() => handleAddNumber('1')}/>
              <Button label= "2" onClick={() => handleAddNumber('2')}/> 
              <Button label= "3" onClick={() => handleAddNumber('3')}/> 
              <Button label= "=" onClick={handleEquals}/> 
            </Row>
          </Content>
    </Container>
  );
}

export default App;
