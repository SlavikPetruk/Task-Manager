import './Calculator.css';
import { btns, BTN_ACTIONS } from './btnConfig';
import { useEffect, useRef, useState } from 'react';

const Calculator = () => {

  const btnsRef = useRef(null);
  const expRef = useRef(null);

  const [expression, setExpression] = useState('')

  useEffect(() => {
    const btns = Array.from(btnsRef.current.querySelectorAll('button'));
    btns.forEach(e => e.style.height = e.offsetWidth + 'px');
}, []);

  const btnClick = item =>{ 
    console.log(item)
    const expDiv = expRef.current

    if (item.action  === BTN_ACTIONS.ADD) {
      addAnimSpan(item.display)
      console.log(expression)

      const oper = item.display !== 'x' ? item.display : '*'
      setExpression(expression + oper)
    }

    if (item.action === BTN_ACTIONS.DELETE) {
          expDiv.parentNode.querySelector('div:last-child').innerHTML = ''
          expDiv.innerHTML = ''
    }
    
    if (item.action === BTN_ACTIONS.CALC) {
      if (expression.trim().length <= 0) return
      expDiv.parentNode.querySelector('div:last-child').remove()
      const cloneNode = expDiv.cloneNode(true)
      expDiv.parentNode.appendChild(cloneNode)

      const transform = `translateY(${-(expDiv.offsetHeight + 10) + 'px'}) scale(0.4)`;
      

      let res = eval(expression)
      setExpression(res.toString())
      setTimeout(() => {
        cloneNode.style.transform = transform
        expDiv.innerHTML = '';
        addAnimSpan(Math.floor(res * 100000000) / 100000000);
    }, 200)
    }
  if (item.action === BTN_ACTIONS.REMOVE) {
    expression.substring(0, expression.length - 1)
  }
    }


  

  const addAnimSpan = content => {
    const expDiv = expRef.current
    const span = document.createElement('span')

    span.innerHTML = content
    span.style.opacity = '1'
    expDiv.appendChild(span)

    const width = span.offsetWidth + 'px'
    span.style.width = '0'

    // expDiv.parentNode.querySelector('div:last-child')
    //       .style.transform = `translateY(${-expDiv.offsetHeight+'px'}) scale(0.4)`;
      
      setTimeout(() => {
        span.style.opacity = '1'
        span.style.width = width
      }, 100)
  }

return (
  <div className="calculator">
    <h1>Calculator</h1>
    <div className="calculator__result">
      <div ref={expRef} className="calculator__result__exp"></div>
      <div className="calculator__result__exp"></div>
    </div>
    <div ref={btnsRef}  className="calculator__btns">
      {btns.map((item,index) => (
        <button 
              key={index} 
              onClick={() => btnClick(item)}
              className={item.class}>
          {item.display}
          </button>) )}
    </div>
  </div>
  )
};

export default Calculator;
