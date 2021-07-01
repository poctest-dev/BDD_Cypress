Feature: Get Subscription detail of the provided user 
  Scenario: Fetch subscription information
    Given I am on Site Homepage
    When I enter cid
    |cid|
    |1  |
    |2  |
    And  I click submit button
    Then I should get subscription details
    |Subscription|
    |LiveSafe,Mvision_Endpoint|
    |Mvision_Cloud,Mobile_Mvision|
   
   

   
    