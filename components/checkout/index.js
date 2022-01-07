// /*
// import React, {useEffect, useState} from 'react';
// import _ from "lodash";
// import {useDispatch, useSelector} from "react-redux";
// import {getCartList} from "../../../services/store/cart/Action";
// import Card from "../../../ShopComponents/Card";
// import {
//     Button, FormControlLabel,
//     List,
//     ListItemButton, ListItemText,
//     Paper, Radio, RadioGroup,
//     Step,
//     StepContent,
//     StepLabel,
//     Stepper,
//     Typography
// } from "@mui/material";
// import {isLoggedIn, login} from "../../../services/login/Action";
// import classnames from 'classnames'
// import DeleteIcon from '@mui/icons-material/Delete';
// import EditIcon from '@mui/icons-material/Edit';
// import {getUserFromLocalStorage, getUserProfileFromLocalStorage} from "../../../services/common/Action";
// import Link from "next/link";
// import Header from "../component/header";
//
// const steps = [
//     {
//         label: 'Select campaign settings',
//         description: `For each ad campaign that you create, you can control how much
//               you're willing to spend on clicks and conversions, which networks
//               and geographical locations you want your ads to show on, and more.`,
//     },
//     {
//         label: 'Create an ad group',
//         description:
//             'An ad group contains one or more ads which target a shared set of keywords.',
//     },
//     {
//         label: 'Create an ad',
//         description: `Try out different ad text to see what brings in the most customers,
//               and learn how to enhance your ads using features like ad extensions.
//               If you run into any problems with your ads, find out how to tell if
//               they're running and how to resolve approval issues.`,
//     },
// ];
//
// const Index = () => {
//     const [summary, setSummary] = useState({
//         subTotal: 0,
//         deliveryFee: 0,
//         total: 0,
//         totalQuantity: 0
//     })
//     const [activeStep, setActiveStep] = React.useState(0);
//     const [showPass, setShowPass] = useState(false)
//     const [editAddress, setEditAddress] = useState(false)
//     const [selectedPaymentIndex, setSelectedPaymentIndex] = useState(1);
//     const [deliveryOption, setDeliveryOption] = useState(1);
//
//     const dispatch = useDispatch()
//     const loggedIn = useSelector(store => store.IsLoggedIn)
//     const cartList = useSelector(store => store.cartList)
//     const user = getUserFromLocalStorage();
//     const profile = getUserProfileFromLocalStorage();
//     useEffect(() => {
//         dispatch(getCartList())
//         dispatch(isLoggedIn())
//     }, [dispatch])
//     useEffect(() => {
//         if (loggedIn) {
//             setActiveStep(2)
//         }
//     }, [loggedIn])
//
//     // const handleNext = () => {
//     //     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//     // };
//     //
//     // const handleBack = () => {
//     //     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//     // };
//
//     const handleReset = () => {
//         setActiveStep(0);
//     };
//
//
//     const handlePaymentMethodListClick = (event, index) => {
//         setSelectedPaymentIndex(index);
//     };
//
//     function handleLogin(e) {
//         e.preventDefault();
//         /!*setShowLoading(true)
//         setLoginInfo({...loginInfo, username: e.target.username.value, password: e.target.password.value})
//         login({username: e.target.username.value, password: e.target.password.value}).then(r => {
//                 if (r.loggedIn === true) {
//                     setShowLoading(false)
//                     dispatch(isLoggedIn())
//                     router.push('/shop/cart')
//                 } else {
//                     setShowLoading(false)
//                     setError({...error, status: true, message: r.message})
//                 }
//             }
//         )*!/
//     }
//
//     function handleCODChange(event) {
//         setDeliveryOption(event.target.value);
//     }
//
//     return (
//         <>
//             <Header/>
//             <div className={'sm:w-4/5 w-full mx-auto mt-8'}>
//                 <div className={'grid grid-cols-2 gap-8'}>
//                     <div className={'border border-gray-200 p-8'}>
//                         <Stepper activeStep={activeStep} orientation="vertical">
//                             <Step key={'checkout-step-1'}>
//                                 <StepLabel
//                                     // optional={
//                                     //     index === 2 ? (
//                                     //         <Typography variant="caption">Last step</Typography>
//                                     //     ) : null
//                                     // }
//                                 >
//                                     {
//                                         loggedIn ?
//                                             <div>
//                                                 You are Logged using <b>{user.fields.username}</b>
//                                             </div>
//                                             :
//                                             <div>Please Login to continue</div>
//                                     }
//
//                                 </StepLabel>
//                                 <StepContent>
//                                     <form onSubmit={handleLogin}>
//                                         <div className="space-y-4 px-32 py-8">
//                                             <div>
//                                                 <label className="text-gray-600 mb-2 block">
//                                                     Phone Number <span className="text-primary">*</span>
//                                                 </label>
//                                                 <input type="text" id="username" name="username" required
//                                                        placeholder={'Ex: 017XXXXXXXX'}
//                                                        className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500
//                                         focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1
//                                         px-3 leading-8 transition-colors duration-200 ease-in-out"/>
//                                             </div>
//                                             <div className={'relative'}>
//                                                 <label htmlFor={'password'}
//                                                        className="text-gray-600 mb-2 block">Password <span
//                                                     className="text-primary">*</span></label>
//                                                 <input type={showPass ? "text" : 'password'} id="password"
//                                                        name="password"
//                                                        placeholder={'********'} required
//                                                        className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500
//                                         focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1
//                                         px-3 leading-8 transition-colors duration-200 ease-in-out"/>
//                                                 <div
//                                                     className="absolute top-10 inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
//                                                 <span
//                                                     className={classnames(showPass ? 'hidden' : '', "material-icons cursor-pointer")}
//                                                     onClick={() => {
//                                                         setShowPass(true)
//                                                     }}
//                                                 >
//                                                     visibility
//                                                 </span>
//                                                     <span
//                                                         onClick={() => {
//                                                             setShowPass(false)
//                                                         }
//                                                         }
//                                                         className={classnames(!showPass ? 'hidden' : '', "material-icons cursor-pointer")}>
//                                                     visibility_off
//                                                 </span>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div className=" px-32 flex justify-end">
//                                             <button type="submit"
//                                                     className="block w-full py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium">
//                                                 Login
//                                             </button>
//                                         </div>
//                                     </form>
//                                     <p className="mt-4 text-gray-600 text-center">
//                                         {/!* eslint-disable-next-line react/no-unescaped-entities *!/}
//                                         Don't have an account? <Link href={'/shop/register'}><a
//                                         className="text-primary">Register Now
//                                     </a></Link>
//                                     </p>
//
//                                 </StepContent>
//                             </Step>
//                             <Step key={'checkout-step-2'}>
//                                 <StepLabel
//                                 >
//                                     Shipping address
//                                 </StepLabel>
//                                 <StepContent>
//                                     <div>
//                                         {
//                                             profile !== null ?
//                                                 <div
//                                                     className={'text-xs leading-6 font-light border border-gray-200 p-4'}>
//                                                     <p>Koushik Chandra Sarker</p>
//                                                     <p>
//                                                         <input
//                                                             type="text"
//                                                             defaultValue={"+8801622774190"}
//                                                             disabled={!editAddress}
//                                                             className={classnames(!editAddress ? "border-0" : "border px-2", "w-full bg-white rounded  border-gray-300 focus:border-indigo-500 " +
//                                                                 "focus:ring-2 focus:ring-indigo-200  outline-none text-gray-700" +
//                                                                 "px-3 leading-8 transition-colors duration-200 ease-in-out")}/>
//                                                     </p>
//                                                     <p>
//                                                         <input
//                                                             type="text"
//                                                             defaultValue={"kathalbagan dhaka, Dhaka, Dhaka City, Bangladesh ."}
//                                                             disabled={!editAddress}
//                                                             className={classnames(!editAddress ? "border-0 " : "border px-2 mt-2", "w-full bg-white rounded  border-gray-300 focus:border-indigo-500 " +
//                                                                 "focus:ring-2 focus:ring-indigo-200  outline-none text-gray-700" +
//                                                                 "px-3 leading-8 transition-colors duration-200 ease-in-out")}/>
//                                                     </p>
//                                                     <div className={"mt-2 flex gap-4"}>
//                                                         <Button variant={"contained"} size={'small'}> Use This
//                                                             Address</Button>
//                                                         <Button onClick={() => setEditAddress(!editAddress)}
//                                                                 variant={"outlined"} size={'small'}
//                                                                 startIcon={<EditIcon/>}> Edit </Button>
//                                                         <Button variant={"outlined"} size={'small'}
//                                                                 startIcon={<DeleteIcon/>}> Delete</Button>
//                                                     </div>
//
//
//                                                 </div>
//                                                 :
//                                                 <></>
//                                         }
//                                     </div>
//                                 </StepContent>
//                             </Step>
//                             <Step key={'checkout-step-3'}>
//                                 <StepLabel
//                                 >
//                                     Payment Method
//                                 </StepLabel>
//                                 <StepContent>
//                                     <div className={'grid grid-cols-6 border border-gray-200'}>
//                                         <div className={'col-span-2'}>
//                                             <List component="nav" aria-label="main mailbox folders">
//                                                 <ListItemButton
//
//                                                     selected={selectedPaymentIndex === 0}
//                                                     onClick={(event) => handlePaymentMethodListClick(event, 0)}
//                                                 >
//                                                     <ListItemText primary="Cash on Delivery"/>
//                                                 </ListItemButton>
//                                                 <ListItemButton
//                                                     selected={selectedPaymentIndex === 1}
//                                                     onClick={(event) => handlePaymentMethodListClick(event, 1)}
//                                                 >
//                                                     <ListItemText primary="Mobile Wallet"/>
//                                                 </ListItemButton>
//                                             </List>
//                                         </div>
//                                         <div className={"col-span-4 p-4 text-xs"}>
//                                             <div className={classnames(selectedPaymentIndex === 0 ? "" : "hidden")}>
//                                                 <RadioGroup
//                                                     aria-label="deliveryOption"
//                                                     name="deliveryOption"
//                                                     value={deliveryOption}
//                                                     onChange={handleCODChange}
//                                                 >
//                                                     <FormControlLabel  value="1" control={<Radio />} label="Cash on Delivery (COD)" />
//                                                 </RadioGroup>
//                                             </div>
//                                             <div className={classnames(selectedPaymentIndex === 1 ? "" : "hidden")}>
//                                                 <RadioGroup
//                                                     aria-label="deliveryOption"
//                                                     name="deliveryOption"
//                                                     value={deliveryOption}
//                                                     onChange={handleCODChange}
//                                                 >
//                                                     <FormControlLabel value="2" control={<Radio />} label="Bkash" />
//                                                 </RadioGroup>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </StepContent>
//                             </Step>
//                         </Stepper>
//                         {activeStep === steps.length && (
//                             <Paper square elevation={0} sx={{p: 3}}>
//                                 <Typography>All steps completed - you&apos;re finished</Typography>
//                                 <Button onClick={handleReset} sx={{mt: 1, mr: 1}}>
//                                     Reset
//                                 </Button>
//                             </Paper>
//                         )}
//                     </div>
//                     <div>
//                         {
//                             cartList.loading ?
//                                 <></>
//                                 :
//                                 !_.isEmpty(cartList.data) ?
//                                     cartList.data.map((cart, i) => (
//                                         <Card key={i} cart={cart}/>
//                                     )) :
//                                     <></>
//                         }
//                         <div className="xl:col-span-3 lg:col-span-4 border border-gray-200 px-4 py-4 rounded mt-4">
//                             <h4 className="text-gray-800 text-lg mb-4 font-medium uppercase">ORDER SUMMARY</h4>
//                             <div className="space-y-1 text-gray-600 pb-3 border-b border-gray-200 leading-9">
//                                 <div className="flex justify-between font-medium margin-right-85">
//                                     <p>Subtotal</p>
//                                     <p className={"text-primary"}>{summary.subTotal}</p>
//                                 </div>
//                                 <div className="flex justify-between margin-right-85">
//                                     <p>Delivery</p>
//                                     <p className={"text-primary"}>{summary.deliveryFee}</p>
//                                 </div>
//                             </div>
//                             <div
//                                 className="flex justify-between my-3 text-gray-800 font-semibold uppercase margin-right-85">
//                                 <h4>Total</h4>
//                                 <h4 className={"text-primary"}>{summary.total}</h4>
//                             </div>
//                         </div>
//                     </div>
//
//                 </div>
//             </div>
//         </>
//
//     );
// };
//
// export default Index;
// */
