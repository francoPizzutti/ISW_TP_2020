const express = require('express');
const { response } = require('express');
const router = express.Router();


/**
 * Handles common GET request
 * @return json response
 */
router.get('/',(request, response, nextFunction) => {
    response.status(200).json({
        message: 'Handling GET requests to /products endpoint'
    });
});

router.get('/:calzado',(request, response, nextFunction) => {
    response.status(200).json({
        message: 'Handling GET requests to /product/calzado endpoint'
    });
});

/**
 * Handles common POST request
 * @returns json response
 */
router.post('/',(request, response, nextFunction) => {
    response.status(200).json({
        message: 'Handling POST requests to /products endpoint'
    });
});

/**
 * Handles getByProductId GET request
 * @returns json response
 */
router.get('/:productId', (request, response, nextFunction) => {
    const id = request.params.productId;
    switch(id) {
        case 'shoes': response.status(200).json({
            message: 'Handling GET request for a SHOE product'
        });
        break;
        case 'sweaters': response.status(200).json({
            message: 'Handling GET request for a SWEATER product'
        });
        break;
    }
});

// A comment 3.
// A comment 4.
/**
 * Handles deteleByProductId DELETE request
 * @returns json response
 */
router.delete('/:productId', (request, response, nextFunction) => {
    var id = request.params.productId;
    switch(id) {
        case 'shoes': response.status(200).json({
            message: 'Handling DELETE request to delete a SHOE product'
        });
        break;
        case 'sweaters': response.status(200).json({
            message: 'Handling DELETE request to delete a SWEATER product'
        });
        break;
    }
});

/**
 * Handles updateById PUT request
 * @returns json response
 */
router.put('/:productId', (request, response, nextFunction) => {
    var id = request.params.productId;
    switch(id) {
        case 'shoes': response.status(200).json({
            message: 'Handling PUT request to update a SHOE product'
        });
        break;
        case 'sweaters': response.status(200).json({
            message: 'Handling PUT request to update a SWEATER product'
        });
        break;
    }
});

module.exports = router;