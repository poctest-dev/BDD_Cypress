          import {Given,And, Then,When} from "cypress-cucumber-preprocessor/steps"
          Given('I am on Site Homepage',  ()=> {
            cy.visit('http://localhost:3000/')
          });
 
          When('I enter cid', async function (dataTable) {
            
               cy.get('#uname').type(dataTable.rawTable[1][0])
          });
 
    
          When('I click submit button', async function () {
           cy.get('[id^=btn1]').click()
           
          });
          Then('I should get subscription details', async function(dataTable){
            cy.get('[id^=lbl]').eq(0).should('contain',dataTable.rawTable[1][0])
          
          })

 
    
 
         
 
 

 
        
 
 

                               
  
 
         
 
 

 
        
 
 

                               