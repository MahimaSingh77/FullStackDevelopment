import logo from './logo.svg';
import './App.css';
import MyItem from './components/MyItem';

import ItemDate from './components/ItemDate';
import Card from './components/Cards';

function App() {
  // const itemTwoName = "Surfexcel";
  const response = [{
    itemName:"Nirm4a",
    itemDate:"20",
    itemMonth:"June",
    itemYear:"1998"

  },
  {
    itemName:"Nirma2",
    itemDate:"202",
    itemMonth:"June",
    itemYear:"1994"

  },
  {
    itemName:"Nirma3",
    itemDate:"203",
    itemMonth:"June",
    itemYear:"1992"

  }
  
  ];

 return ( 
  <div>
    <Card>
  <MyItem name={response[0].itemName} >Hellooooooooooooo</MyItem>  
  <ItemDate day={response[0].itemDate} month={response[0].itemMonth} year={response[0].itemYear}></ItemDate>


  {/* <MyItem name={itemTwoName} ></MyItem>  
  <ItemDate day="22" month="July" year="1999"></ItemDate> */}
  <MyItem name={response[1].itemName} ></MyItem>  
  <ItemDate day={response[1].itemDate} month={response[1].itemMonth} year={response[1].itemYear}></ItemDate>


  {/* <MyItem name="555"></MyItem>  
  <ItemDate day="24" month="Sept" year="2010"></ItemDate> */}
  <MyItem name={response[2].itemName} ></MyItem>  
  <ItemDate day={response[2].itemDate} month={response[2].itemMonth} year={response[2].itemYear}></ItemDate>


    <div className="App">
      Hello Jee</div>

      
      </Card>
      </div>
    
  );
 
} 
 
export default App;