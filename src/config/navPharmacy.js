import React from 'react';

import {BrowserRouter as Router, Switch, Route, Link, withRouter, NavLink } from 'react-router-dom'

import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'


import PharmacyDetail from '../features/pharmacy/index'
import Daybook from '../features/daybook'

import SupplierLedger from '../features/supplier/ledger'
import SupplierList from '../features/supplier/list'
import SupplierListManage from '../features/supplier/listManage'
import SupplierAdd from '../features/supplier/create'
import SupplierView from '../features/supplier/view'
import SupplierEdit from '../features/supplier/edit'
import SupplierInitializeAddPayment from '../features/supplier/initializeAddPayment'
import SupplierAddOpeningStock from '../features/supplier/openingBalanceAdd'
import SupplierAddPayment from '../features/supplier/paymentAdd'
import SupplierPaymentView from '../features/supplier/paymentView'
import SupplierPaymentEdit from '../features/supplier/paymentEdit'
import SupplierPaymentList from '../features/supplier/paymentList'

import DrugList from '../features/drug/list'
import DrugListIncomplete from '../features/drug/listIncomplete'
import DrugListExpiring from '../features/drug/listExpiring'
import DrugListStockalert from '../features/drug/listStockalert'
import DrugListExpired from '../features/drug/listExpired'
import SalesBillInitialize from '../features/salesbill/initialize'
import SalesBillCreate from '../features/salesbill/create'
import SalesBillInitializeInstant from '../features/salesbill/initializeInstant'
import SalesBillCreateInstant from '../features/salesbill/createInstant'

import PurchaseReturnList from '../features/purchaseReturn/invoiceList'
import PurchaseReturnView from '../features/purchaseReturn/view'
import PurchaseReturnDrugWiseList from '../features/purchaseReturn/listDrugWise'

import PurchaseBillList from '../features/purchase/invoiceList'
import PurchaseBillInitialize from '../features/purchase/initialize'
import PurchaseBillCreate from '../features/purchase/create'
import PurchaseBillView from '../features/purchase/view'

import PurchaseDrugWiseList from '../features/purchase/listDrugWise'

import SalesBillView from '../features/salesbill/view'
import SalesBillList from '../features/salesbill/list'
import SalesDrugWiseList from '../features/salesbill/listDrugWise'

import SalesReturnList from '../features/salesReturn/invoiceList'
import SalesReturnView from '../features/salesReturn/view'
import SalesReturnDrugWiseList from '../features/salesReturn/listDrugWise'
import ProfitLoss from '../features/profitLoss'

import DrugAdjustmentList from '../features/drugAdjustment/list'
import DrugAdjustmentCreate from '../features/drugAdjustment/create'
import DrugAdjustmentView from '../features/drugAdjustment/view'
import DrugAdjustmentEdit from '../features/drugAdjustment/edit'

import ExpenseList from '../features/expense/list'
import ExpenseAdd from '../features/expense/create'
import ExpenseView from '../features/expense/view'
import ExpenseEdit from '../features/expense/edit'

import ExpenseTypeList from '../features/expenseType/list'
import ExpenseTypeAdd from '../features/expenseType/create'
import ExpenseTypeView from '../features/expenseType/view'
import ExpenseTypeEdit from '../features/expenseType/edit'

import PatientList from '../features/patient/list'
import PatientAdd from '../features/patient/create'
import PatientView from '../features/patient/view'
import PatientEdit from '../features/patient/edit'

import StaffList from '../features/staff/list'
import StaffAdd from '../features/staff/create'
import StaffView from '../features/staff/view'
import StaffEdit from '../features/staff/edit'

import ManufacturerList from '../features/manufacturer/list'
import ManufacturerAdd from '../features/manufacturer/create'
import ManufacturerView from '../features/manufacturer/view'
import ManufacturerEdit from '../features/manufacturer/edit'

import RoleList from '../features/privacy/role/list'
import RoleAdd from '../features/privacy/role/create'
import RoleEdit from '../features/privacy/role/edit'
import PrivacyManage from '../features/privacy/manage'
import PrivacyFirstRole from '../features/privacy/initialize'

import PaymentReceiptList from '../features/paymentReceipt/list'
import PharmacyEdit from '../features/pharmacy/edit'

import DrugSettingDrugs from '../features/drugSetting/drug'
import DrugSettingOpeningStock from '../features/drugSetting/openingStock'
import DrugSettingSetup from '../features/drugSetting/setup'

import DrugGroupList from '../features/drugSetting/drugGroup/list'
import DrugGroupAdd from '../features/drugSetting/drugGroup/create'
import DrugGroupEdit from '../features/drugSetting/drugGroup/edit'

import DrugCategoryList from '../features/drugSetting/drugCategory/list'
import DrugCategoryAdd from '../features/drugSetting/drugCategory/create'
import DrugCategoryEdit from '../features/drugSetting/drugCategory/edit'

import Dashboard from '../features/dashboard'
import AccountInvoice from '../features/accountInvoice/list'


import MernPostCreate from '../features/mernPost/create'
import MernPostView from '../features/mernPost/view'
import MernPostEdit from '../features/mernPost/edit'
import MernPostList from '../features/mernPost/list'


import {ProtectedPharmacyRoute} from './protectedPharmacyRoute'
import {isLoggedIn, loggedInUser, getSessionPharmacy} from '../common'

function checkIfInsideClinic() {
  
    let state = localStorage["appState"];
    let AppState = state ? JSON.parse(state) : '';
  
    console.log('nnnnn', AppState.clinic_name)
    if (AppState && AppState.clinic_id) {
        return AppState.clinic_id;
    }
    
}

const NavPharmacy = () => {


    let pharmacy = getSessionPharmacy();
    let user = loggedInUser();
    
    return (<>

          <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{'display':'block'}}>
              

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                      <NavLink exact activeClassName="selected" className="nav-link" to="/profile">Profile</NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink style={{fontSize: '20px', position: 'absolute', left: '50%', marginLeft: '-100px'}} exact activeClassName="selected" className="nav-link" to="/pharmacy/dashboard"><b>{pharmacy ? pharmacy.name : ''}</b></NavLink>
                    </li>

                    <li className="nav-item" style={{position: 'absolute', right: '0', marginRight: '200px'}}>
                      <NavDropdown title={user.name} id="nav-dropdown">
                  
                      <NavDropdown.Item eventKey="4.1">
                  <NavLink exact activeClassName="selected" className="nav-link" to="/pharmacy/salesbill/list">Account</NavLink>
                  </NavDropdown.Item> 


                  <NavDropdown.Item eventKey="4.1">
                  <NavLink exact activeClassName="selected" className="nav-link" to="/logout">Logout</NavLink>
                  </NavDropdown.Item> 



                      </NavDropdown>
                </li>
                  </ul>
                </div>
          </nav>
          
          <nav className="navbar navbar-expand-lg navbar-light sub-nav-bar">     
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                
                <li className="nav-item">
                <NavLink exact activeClassName="selected" className="nav-link" to="/pharmacy/dashboard">Dashboard</NavLink>
                </li>
                
                <li className="nav-item">
                <NavDropdown title="Catalogue" id="nav-dropdown">

                  <NavDropdown.Item eventKey="4.1">
                  <NavLink exact activeClassName="selected" className="nav-link" to="/pharmacy/drug/list">Drug List</NavLink>
                  </NavDropdown.Item> 


                  <NavDropdown.Item eventKey="4.1">
                  <NavLink exact activeClassName="selected" className="nav-link" to="/pharmacy/supplier/list">Supplier List</NavLink>
                  </NavDropdown.Item>


                  <NavDropdown.Item eventKey="4.1">
                  <NavLink exact activeClassName="selected" className="nav-link" to="/pharmacy/patient/list">Patient List</NavLink>
                  </NavDropdown.Item> 

                </NavDropdown>
                </li>
                
                <li className="nav-item">
                <NavDropdown title="Purchase" id="nav-dropdown">
                  
                  <NavDropdown.Item eventKey="4.1">
                  <NavLink exact activeClassName="selected" className="nav-link" to="/pharmacy/purchase/listdrugwise">Purchase Report</NavLink>
                  </NavDropdown.Item> 


                  <NavDropdown.Item eventKey="4.1">
                  <NavLink exact activeClassName="selected" className="nav-link" to="/pharmacy/purchasereturn/listdrugwise">Purchase Return Report</NavLink>
                  </NavDropdown.Item> 

                </NavDropdown>
                </li>
                
                <li className="nav-item">
                <NavDropdown title="Sales" id="nav-dropdown">
                  
                  <NavDropdown.Item eventKey="4.1">
                  <NavLink exact activeClassName="selected" className="nav-link" to="/pharmacy/salesbill/listdrugwise">Sales Report</NavLink>
                  </NavDropdown.Item> 


                  <NavDropdown.Item eventKey="4.1">
                  <NavLink exact activeClassName="selected" className="nav-link" to="/pharmacy/salesreturn/listdrugwise">Sales Return Report</NavLink>
                  </NavDropdown.Item> 

                </NavDropdown>
                </li>
                
                <li className="nav-item">
                <NavDropdown title="Financial Reports" id="nav-dropdown">
                  
                  <NavDropdown.Item eventKey="4.1">
                  <NavLink exact activeClassName="selected" className="nav-link" to="/pharmacy/daybook">Daybook</NavLink>
                  </NavDropdown.Item> 


                  <NavDropdown.Item eventKey="4.1">
                  <NavLink exact activeClassName="selected" className="nav-link" to="/pharmacy/purchase/list">Purchase Invoices</NavLink>
                  </NavDropdown.Item> 


                  <NavDropdown.Item eventKey="4.1">
                  <NavLink exact activeClassName="selected" className="nav-link" to="/pharmacy/purchasereturn/list">Purchase Return Invoices</NavLink>
                  </NavDropdown.Item> 


                  <NavDropdown.Item eventKey="4.1">
                  <NavLink exact activeClassName="selected" className="nav-link" to="/pharmacy/salesbill/list">Sales Invoices</NavLink>
                  </NavDropdown.Item> 


                  <NavDropdown.Item eventKey="4.1">
                  <NavLink exact activeClassName="selected" className="nav-link" to="/pharmacy/salesreturn/list">Sales Return Invoices</NavLink>
                  </NavDropdown.Item> 


                  <NavDropdown.Item eventKey="4.1">
                  <NavLink exact activeClassName="selected" className="nav-link" to="/pharmacy/profitloss">Profit & Loss Report</NavLink>
                  </NavDropdown.Item> 


                  <NavDropdown.Item eventKey="4.1">
                  <NavLink exact activeClassName="selected" className="nav-link" to="/pharmacy/drugadjustment/list">Adjustments</NavLink>
                  </NavDropdown.Item> 


                  <NavDropdown.Item eventKey="4.1">
                  <NavLink exact activeClassName="selected" className="nav-link" to="/pharmacy/expense/list">Expenses</NavLink>
                  </NavDropdown.Item> 


                  {/* <NavDropdown.Item eventKey="4.1">
                  <NavLink exact activeClassName="selected" className="nav-link" to="/pharmacy/paymentreceipt/list">Payment Receipts</NavLink>
                  </NavDropdown.Item>  */}

                </NavDropdown>
                </li>
                
                <li className="nav-item">
                <NavDropdown title="+ ADD" id="nav-dropdown">
                
                
                  <NavDropdown.Item eventKey="4.1">
                  <NavLink exact activeClassName="" className="nav-link" to="/pharmacy/purchase/initialize">Add Purchase Bill</NavLink>
                  </NavDropdown.Item> 


                  <NavDropdown.Item eventKey="4.1">
                  <NavLink exact activeClassName="" className="nav-link" to="/pharmacy/drugadjustment/create">Add Adjustment</NavLink>
                  </NavDropdown.Item> 


                  <NavDropdown.Item eventKey="4.1">
                  <NavLink exact activeClassName="" className="nav-link" to="/pharmacy/expense/create">Add Expense</NavLink>
                  </NavDropdown.Item> 


                  <NavDropdown.Item eventKey="4.1">
                  <NavLink exact activeClassName="" className="nav-link" to="/pharmacy/patient/create">Add Patient</NavLink>
                  </NavDropdown.Item> 

                </NavDropdown>
                </li>
                
                <li className="nav-item">
                <NavLink exact activeClassName="selected" className="nav-link" to="/pharmacy/salesbill/initialize">New Sales Bill</NavLink>
                </li>
                
                
                <li className="nav-item">
                <NavLink exact activeClassName="selected" className="nav-link" to="/pharmacy/salesbill/initializeinstant">(Quick Bill)</NavLink>
                </li>
                
                
                <li className="nav-item" style={{position: 'absolute', marginRight: '200px', right: 0}}>
                <NavDropdown title="Setting" id="nav-dropdown">

                  <NavDropdown.Item eventKey="4.1">
                  <NavLink exact activeClassName="selected" className="nav-link" to="/pharmacy/drugsetting/drugs">Drug Catalogue</NavLink>
                  </NavDropdown.Item> 


                  <NavDropdown.Item eventKey="4.1">
                  <NavLink exact activeClassName="selected" className="nav-link" to="/pharmacy/expensetype/list">Expense Types</NavLink>
                  </NavDropdown.Item> 


                  <NavDropdown.Item eventKey="4.1">
                  <NavLink exact activeClassName="selected" className="nav-link" to="/pharmacy/supplier/listmanage">Suppliers</NavLink>
                  </NavDropdown.Item>


                  <NavDropdown.Item eventKey="4.1">
                  <NavLink exact activeClassName="selected" className="nav-link" to="/pharmacy/manufacturer/list">Manufacturers</NavLink>
                  </NavDropdown.Item>


                  <NavDropdown.Item eventKey="4.1">
                  <NavLink exact activeClassName="selected" className="nav-link" to="/pharmacy/staff/list">Staffs</NavLink>
                  </NavDropdown.Item>



                  <NavDropdown.Item eventKey="4.1">
                  <NavLink exact activeClassName="selected" className="nav-link" to="/pharmacy/pharmacy/edit">Profile/Print Setup</NavLink>
                  </NavDropdown.Item>


                  <NavDropdown.Item eventKey="4.1">
                  <NavLink exact activeClassName="selected" className="nav-link" to="/pharmacy/privacy/initializerole">Privacy Setup</NavLink>
                  </NavDropdown.Item>


                  <NavDropdown.Item eventKey="4.1">
                  <NavLink exact activeClassName="selected" className="nav-link" to="/pharmacy/account/invoice">Account</NavLink>
                  </NavDropdown.Item>


                </NavDropdown>
                </li>
                  
                </ul>
              </div>
            </nav>
  
          <ProtectedPharmacyRoute  path='/pharmacy/detail' component={ PharmacyDetail } />
          <ProtectedPharmacyRoute  path='/pharmacy/daybook' component={ Daybook } />
          <ProtectedPharmacyRoute  path='/pharmacy/supplier/ledger/:id' component={ SupplierLedger } />

          <ProtectedPharmacyRoute  path='/pharmacy/supplier/list' component={ SupplierList } />
          <ProtectedPharmacyRoute  path='/pharmacy/supplier/listmanage' component={ SupplierListManage } />
          <ProtectedPharmacyRoute  path='/pharmacy/supplier/initializeaddpayment/:id' component={ SupplierInitializeAddPayment } />
          <ProtectedPharmacyRoute  path='/pharmacy/supplier/addpayment/:id' component={ SupplierAddPayment } />
          <ProtectedPharmacyRoute  path='/pharmacy/supplier/addopeningstock/:id' component={ SupplierAddOpeningStock } />
          <ProtectedPharmacyRoute  path='/pharmacy/supplier/viewpayment/:id' component={ SupplierPaymentView } />
          <ProtectedPharmacyRoute  path='/pharmacy/supplier/editpayment/:id' component={ SupplierPaymentEdit } />
          <ProtectedPharmacyRoute  path='/pharmacy/supplier/listpayment' component={ SupplierPaymentList } />
          <ProtectedPharmacyRoute  path='/pharmacy/supplier/create' component={ SupplierAdd } />
          <ProtectedPharmacyRoute  path='/pharmacy/supplier/view/:id' component={ SupplierView } />
          <ProtectedPharmacyRoute  path='/pharmacy/supplier/edit/:id' component={ SupplierEdit } />

          <ProtectedPharmacyRoute  path='/pharmacy/drug/list' component={ DrugList } />
          <ProtectedPharmacyRoute  path='/pharmacy/drug/listincomplete' component={ DrugListIncomplete } />
          <ProtectedPharmacyRoute  path='/pharmacy/drug/listexpiring' component={ DrugListExpiring } />
          <ProtectedPharmacyRoute  path='/pharmacy/drug/listexpired' component={ DrugListExpired } />
          <ProtectedPharmacyRoute  path='/pharmacy/drug/liststockalert' component={ DrugListStockalert } />

          <ProtectedPharmacyRoute  path='/pharmacy/salesbill/initialize' component={ SalesBillInitialize } />
          <ProtectedPharmacyRoute  path='/pharmacy/salesbill/create/:id' component={ SalesBillCreate } />
          <ProtectedPharmacyRoute  path='/pharmacy/salesbill/initializeinstant' component={ SalesBillInitializeInstant } />
          <ProtectedPharmacyRoute  path='/pharmacy/salesbill/createinstant/:id' component={ SalesBillCreateInstant } />
          <ProtectedPharmacyRoute  path='/pharmacy/salesbill/view/:id' component={ SalesBillView } />
          <ProtectedPharmacyRoute  path='/pharmacy/salesbill/list' component={ SalesBillList } />
          
          <ProtectedPharmacyRoute  path='/pharmacy/salesbill/listdrugwise' component={ SalesDrugWiseList } />

          <ProtectedPharmacyRoute  path='/pharmacy/salesreturn/list' component={ SalesReturnList } />
          <ProtectedPharmacyRoute  path='/pharmacy/salesreturn/view/:id' component={ SalesReturnView } />
          <ProtectedPharmacyRoute  path='/pharmacy/salesreturn/listdrugwise' component={ SalesReturnDrugWiseList } />

          <ProtectedPharmacyRoute  path='/pharmacy/purchase/list' component={ PurchaseBillList } />
          <ProtectedPharmacyRoute  path='/pharmacy/purchase/initialize' component={ PurchaseBillInitialize } />
          <ProtectedPharmacyRoute  path='/pharmacy/purchase/create/:id' component={ PurchaseBillCreate } />
          <ProtectedPharmacyRoute  path='/pharmacy/purchase/view/:id' component={ PurchaseBillView } />
          <ProtectedPharmacyRoute  path='/pharmacy/purchase/listdrugwise' component={ PurchaseDrugWiseList } />

          <ProtectedPharmacyRoute  path='/pharmacy/purchasereturn/list' component={ PurchaseReturnList } />
          <ProtectedPharmacyRoute  path='/pharmacy/purchasereturn/view/:id' component={ PurchaseReturnView } />
          <ProtectedPharmacyRoute  path='/pharmacy/purchasereturn/listdrugwise' component={ PurchaseReturnDrugWiseList } />
          
          <ProtectedPharmacyRoute  path='/pharmacy/drugadjustment/list' component={ DrugAdjustmentList } />
          <ProtectedPharmacyRoute  path='/pharmacy/drugadjustment/create' component={ DrugAdjustmentCreate } />
          <ProtectedPharmacyRoute  path='/pharmacy/drugadjustment/view/:id' component={ DrugAdjustmentView } />
          <ProtectedPharmacyRoute  path='/pharmacy/drugadjustment/edit/:id' component={ DrugAdjustmentEdit } />
          
          <ProtectedPharmacyRoute  path='/pharmacy/expense/list' component={ ExpenseList } />
          <ProtectedPharmacyRoute  path='/pharmacy/expense/create' component={ ExpenseAdd } />
          <ProtectedPharmacyRoute  path='/pharmacy/expense/view/:id' component={ ExpenseView } />
          <ProtectedPharmacyRoute  path='/pharmacy/expense/edit/:id' component={ ExpenseEdit } />

          <ProtectedPharmacyRoute  path='/pharmacy/expensetype/list' component={ ExpenseTypeList } />
          <ProtectedPharmacyRoute  path='/pharmacy/expensetype/create' component={ ExpenseTypeAdd } />
          <ProtectedPharmacyRoute  path='/pharmacy/expensetype/view/:id' component={ ExpenseTypeView } />
          <ProtectedPharmacyRoute  path='/pharmacy/expensetype/edit/:id' component={ ExpenseTypeEdit } />

          <ProtectedPharmacyRoute  path='/pharmacy/patient/list' component={ PatientList } />
          <ProtectedPharmacyRoute  path='/pharmacy/patient/create' component={ PatientAdd } />
          <ProtectedPharmacyRoute  path='/pharmacy/patient/view/:id' component={ PatientView } />
          <ProtectedPharmacyRoute  path='/pharmacy/patient/edit/:id' component={ PatientEdit } />

          <ProtectedPharmacyRoute  path='/pharmacy/staff/list' component={ StaffList } />
          <ProtectedPharmacyRoute  path='/pharmacy/staff/create' component={ StaffAdd } />
          <ProtectedPharmacyRoute  path='/pharmacy/staff/view/:id' component={ StaffView } />
          <ProtectedPharmacyRoute  path='/pharmacy/staff/edit/:id' component={ StaffEdit } />

          <ProtectedPharmacyRoute  path='/pharmacy/manufacturer/list' component={ ManufacturerList } />
          <ProtectedPharmacyRoute  path='/pharmacy/manufacturer/create' component={ ManufacturerAdd } />
          <ProtectedPharmacyRoute  path='/pharmacy/manufacturer/view/:id' component={ ManufacturerView } />
          <ProtectedPharmacyRoute  path='/pharmacy/manufacturer/edit/:id' component={ ManufacturerEdit } />

          <ProtectedPharmacyRoute  path='/pharmacy/role/list' component={ RoleList } />
          <ProtectedPharmacyRoute  path='/pharmacy/role/create' component={ RoleAdd } />
          <ProtectedPharmacyRoute  path='/pharmacy/role/edit/:id' component={ RoleEdit } />

          <ProtectedPharmacyRoute  path='/pharmacy/paymentreceipt/list' component={ PaymentReceiptList } />
          <ProtectedPharmacyRoute  path='/pharmacy/pharmacy/edit' component={ PharmacyEdit } />

          <ProtectedPharmacyRoute  path='/pharmacy/privacy/initializerole' component={ PrivacyFirstRole } />
          <ProtectedPharmacyRoute  path='/pharmacy/privacy/manage/:id' component={ PrivacyManage } />

          <ProtectedPharmacyRoute  path='/pharmacy/drugsetting/drugs' component={ DrugSettingDrugs } />
          <ProtectedPharmacyRoute  path='/pharmacy/drugsetting/openingstock' component={ DrugSettingOpeningStock } />
          <ProtectedPharmacyRoute  path='/pharmacy/drugsetting/setup' component={ DrugSettingSetup } />
          
          <ProtectedPharmacyRoute  path='/pharmacy/drugsetting/druggroup/list' component={ DrugGroupList } />
          <ProtectedPharmacyRoute  path='/pharmacy/drugsetting/druggroup/create' component={ DrugGroupAdd } />
          <ProtectedPharmacyRoute  path='/pharmacy/drugsetting/druggroup/edit/:id' component={ DrugGroupEdit } />

          <ProtectedPharmacyRoute  path='/pharmacy/drugsetting/drugcategory/list' component={ DrugCategoryList } />
          <ProtectedPharmacyRoute  path='/pharmacy/drugsetting/drugcategory/create' component={ DrugCategoryAdd } />
          <ProtectedPharmacyRoute  path='/pharmacy/drugsetting/drugcategory/edit/:id' component={ DrugCategoryEdit } />

          <ProtectedPharmacyRoute  path='/pharmacy/profitloss' component={ ProfitLoss } />
          <ProtectedPharmacyRoute  path='/pharmacy/dashboard' component={ Dashboard } />
          <ProtectedPharmacyRoute  path='/pharmacy/account/invoice' component={ AccountInvoice } />
          

          <ProtectedPharmacyRoute  path='/pharmacy/mern/post/create' component={ MernPostCreate } />
          <ProtectedPharmacyRoute  path='/pharmacy/mern/post/view/:id' component={ MernPostView } />
          <ProtectedPharmacyRoute  path='/pharmacy/mern/post/edit/:id' component={ MernPostEdit } />
          <ProtectedPharmacyRoute  path='/pharmacy/mern/post/list' component={ MernPostList } />
           
          </>)
  }

  export default NavPharmacy;