# STONKS Testing 

## Introduction  
We tested our website using jest testing library since our project was implemented using react. We created two unit classes, and for each class 5 unit tests. 

## Testing 
Stonks website went through 10 units tests, the two test classes are SearchBar.test.js and Data.test.js, below is the screenshop of both classes and the 5 units tests that we created:

testing![image](https://user-images.githubusercontent.com/38230942/119393758-5e216180-bc9f-11eb-963e-1965d247c0d3.png)

The two files can be found in the Testing branch: https://github.com/CSCI-40500-77100-Spring-2021/project-7/tree/Testing/src/components inside of Data and SearchBar folder that are called Data.test.js https://github.com/CSCI-40500-77100-Spring-2021/project-7/blob/Testing/src/components/Data/Data.test.js and SearchBar.test.js https://github.com/CSCI-40500-77100-Spring-2021/project-7/blob/Testing/src/components/SearchBar/SearchBar.test.js  

For the search bar we ran 5 tests:
1. Loads and displays a search input.
2. Correct label output.
3. Search input records of the stock ticker we enter.
4. Submit button is rendered correctly
5. Submit button runs

For the data we ran 5 tests:
1. Does not render a table if a ticker is not passed in.
2. Renders a table with the company name if a ticker is passed in.
3. Table displays the correct company name.
4. Table displays the correct industry.
5. Table displays the correct website url.

All of the tests were passed and worked:
Test Suites: 2 passed, 2 total
Tests:       10 passed, 10 total
Snapshots:   0 total
Time:        5.777 s

## Instructions for testing:
- npm i
- npm run test

