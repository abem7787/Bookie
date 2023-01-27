import styled from "styled-components";
import {useState, useEffect} from "react";
import axios from "axios";
// import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;

`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;


// axios post to database 


const Register = () => {

  const [count, setCount] = useState([]);

//   useEffect(() => {
// axios.get('/localhost:8888/api')
//   .then(function (response) {
//     // handle success
//     setCount()
//     console.log(response);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .finally(function () {
//     // always executed
//   });
// });

const handleChange = (event) =>{
  const name = event.target.name;
  const value = event.target.value;
  setCount( values => ({...values, [name]: value }))


}


const handleSubmit = (event) =>{
  event.preventDefault();
  axios.post("http://localhost:8888/api/user/save", count)
  console.log(count)
  
}


  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form onSubmit={handleSubmit}>
          <Input type="text" name="first name" placeholder="first name" onChange={handleChange}/>
          <Input type="text" name="last name" placeholder="last name" onChange={handleChange}/>
          <Input type="text" name="username" placeholder="username"onChange={handleChange}/>
          <Input type="text" name="email" placeholder="email" onChange={handleChange}/>
          <Input type="text" name="password" placeholder="password" onChange={handleChange}/>
          <Input type="text" name="confirm password"   placeholder="confirm password" onChange={handleChange} />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;