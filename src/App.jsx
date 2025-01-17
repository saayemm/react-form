
import './App.css'
import Grandpa from './components/grandpa/Grandpa'
// import ReuseAbleForm from './components/reuseAbleForm/ReuseAbleForm'
// import CustomHookForm from './components/customHookForm/CustomHookForm'
// import RefForm from './components/refForm/RefForm'
// import StateFullForm from './components/stateFullForm/StateFullForm'
// import SimpleForm from './components/simpleForm/SimpleForm'

function App() {

// const hundleSignUpSubmit = data => {
//     console.log("sign up data", data)
// }

// const hundleUpdateProfile = data => {
//   console.log("update profile", data)
// }
 

  return (
    <>
     <Grandpa></Grandpa>
      {/* <SimpleForm></SimpleForm>
       */}
      {/* <StateFullForm></StateFullForm> */}
      {/* <RefForm></RefForm> */}
      {/* <CustomHookForm></CustomHookForm> */}
      {/* <ReuseAbleForm formTitle={"Sign Up"} hundleSubmit={hundleSignUpSubmit}>
        <div>
          <h2>Sign Up</h2>
          <h2>Please sign up right now</h2>
        </div>
      </ReuseAbleForm>
      <ReuseAbleForm formTitle={"Profile Update"} submitBtnTxt={"Profile Update"} hundleSubmit={hundleUpdateProfile}>
      <div>
          <h2>Sign Up</h2>
          <h2>Please sign up right now</h2>
        </div>
      </ReuseAbleForm> */}
      
    </>
  )
}

export default App
