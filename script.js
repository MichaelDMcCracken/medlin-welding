// Function to generate product tables for each category under a specific metal type
// function generateCategoryProducts(data, containerId) {
//     // Create a div to hold the metal category and its categories (Sheets, Bars, etc.)
//     const containerDiv = document.createElement('div');
//     containerDiv.classList.add('metal-category');

//     // Create the main category title (h3) dynamically from the 'name' attribute (metal type)
//     const categoryTitle = document.createElement('h3');
//     categoryTitle.textContent = `Products from ${data.name}`;  // e.g., "Products from Stainless Steel"
//     containerDiv.appendChild(categoryTitle);  // Title placed above all the categories

//     // Loop through each category (Sheet / Plate, Flat Bars, etc.)
//     data.categories.forEach(category => {
//         // Create a subheading for the category (e.g., "Sheet / Plate")
//         const categorySubheading = document.createElement('h4');
//         categorySubheading.textContent = category.name;  // e.g., "Sheet / Plate", "Flat Bars"
//         containerDiv.appendChild(categorySubheading);

//         // Create the table for this category
//         const table = document.createElement('table');
//         table.classList.add('product-table');

//         // Table header (fixed structure for the columns)
//         const tableHeader = document.createElement('thead');
//         tableHeader.innerHTML = `
//             <tr>
//                 <th>Product Name</th>
//                 <th>Thickness (gauge)</th>
//                 <th>Width (in.)</th>
//                 <th>Length (in.)</th>
//                 <th>Price</th>
//             </tr>
//         `;
//         table.appendChild(tableHeader);

//         // Table body for the product rows (dynamically generated from data)
//         const tableBody = document.createElement('tbody');
//         category.products.forEach(product => {
//             const row = document.createElement('tr');
//             row.innerHTML = `
//                 <td>${product.name}</td>
//                 <td>${product.thickness}</td>
//                 <td>${product.width}</td>
//                 <td>${product.length}</td>
//                 <td class="price">${product.price}</td>
//             `;
//             tableBody.appendChild(row);
//         });

//         table.appendChild(tableBody);

//         // Append the table to the container for this category
//         containerDiv.appendChild(table);
//     });

//     // Append the whole content (title + tables) to the container specified by containerId
//     document.getElementById(containerId).appendChild(containerDiv);
// }

// // Function to load the JSON file and generate the tables
// function loadDataAndGenerateTable(fileName, containerId) {
//     fetch(fileName)  // Load the JSON file
//         .then(response => response.json())  // Parse the JSON data
//         .then(data => {
//             // Call generateCategoryProducts with the loaded data
//             generateCategoryProducts(data, containerId);
//         })
//         .catch(error => {
//             console.error('Error loading data:', error);
//         });
// }

// // Example of how to load the "stainless-steel.json" file and generate its table
// loadDataAndGenerateTable('stainless-steel.json', 'product-list-2');

// // Call this function to load the "carbon-steel.json" file and generate its table
// loadDataAndGenerateTable('carbon-steel.json', 'product-list-1');
// loadDataAndGenerateTable('aluminum.json', 'product-list-3');


// Function to generate product tables for each category under a specific metal type
function generateCategoryProducts(data, containerId) {
    // Create a div to hold the metal category and its categories (Sheets, Bars, etc.)
    const containerDiv = document.createElement('div');
    containerDiv.classList.add('metal-category');

    // Create the main category title (h3) dynamically from the 'name' attribute (metal type)
    const categoryTitle = document.createElement('h3');
    categoryTitle.textContent = `Products from ${data.name}`;  // e.g., "Products from Stainless Steel"
    containerDiv.appendChild(categoryTitle);  // Title placed above all the categories

    // Loop through each category (Sheet / Plate, Flat Bars, etc.)
    data.categories.forEach(category => {
        // Create a subheading for the category (e.g., "Sheet / Plate")
        const categorySubheading = document.createElement('h4');
        categorySubheading.textContent = category.name;  // e.g., "Sheet / Plate", "Flat Bars"
        containerDiv.appendChild(categorySubheading);

        // Create the table for this category
        const table = document.createElement('table');
        table.classList.add('product-table');

        // Table header (fixed structure for the columns)
        const tableHeader = document.createElement('thead');
        tableHeader.innerHTML = `
            <tr>
                <th>Product Name</th>
                <th>Thickness</th>
                <th>Width</th>
                <th>Length</th>
                <th>Price</th>
            </tr>
        `;
        table.appendChild(tableHeader);

        // Table body for the product rows (dynamically generated from data)
        const tableBody = document.createElement('tbody');
        category.products.forEach(product => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${product.name}</td>
                <td>${product.thickness}</td>
                <td>${product.width}</td>
                <td>${product.length}</td>
                <td class="price">${product.price}</td>
            `;
            tableBody.appendChild(row);
        });

        table.appendChild(tableBody);

        // Append the table to the container for this category
        containerDiv.appendChild(table);
    });

    // Append the whole content (title + tables) to the container specified by containerId
    document.getElementById(containerId).appendChild(containerDiv);
}

// Function to load the YAML file and generate the tables
function loadDataAndGenerateTable(fileName, containerId) {
    fetch(fileName)  // Load the YAML file from the 'data' folder
        .then(response => response.text())  // Read it as text
        .then(yamlText => {
            const data = jsyaml.load(yamlText);  // Parse the YAML content into a JS object
            generateCategoryProducts(data, containerId);  // Generate the HTML content
        })
        .catch(error => {
            console.error('Error loading YAML file:', error);
        });
}

// Example: Load the YAML files and generate their corresponding tables
loadDataAndGenerateTable('data/aluminum.yaml', 'product-list-2');
loadDataAndGenerateTable('data/carbon-steel.yaml', 'product-list-1');
loadDataAndGenerateTable('data/stainless-steel.yaml', 'product-list-3');
