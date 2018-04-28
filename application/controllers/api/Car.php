<?php

defined('BASEPATH') OR exit('No direct script access allowed');
header('Access-Control-Allow-Origin: *');
// This can be removed if you use __autoload() in config.php OR use Modular Extensions
/** @noinspection PhpIncludeInspection */
require APPPATH . 'libraries/REST_Controller.php';

/**
 * This is an example of a few basic user interaction methods you could use
 * all done with a hardcoded array
 *
 * @package         CodeIgniter
 * @subpackage      Rest Server
 * @category        Controller
 * @author          Phil Sturgeon, Chris Kacerguis
 * @license         MIT
 * @link            https://github.com/chriskacerguis/codeigniter-restserver
 */
class Car extends REST_Controller {

    function __construct()
    {
        // Construct the parent class
        parent::__construct();

        // Configure limits on our controller methods
        // Ensure you have created the 'limits' table and enabled 'limits' within application/config/rest.php
        $this->methods['cars_get']['limit'] = 500; // 500 requests per hour per user/key
// 50 requests per hour per user/key
        $this->load->model('Car_model');
    }

    public function cars_get()
    {
        // Users from a data store e.g. database
        $cars=$this->Car_model->get_cars();
        //This->get('carI') in http://localhost/car/index.php/api/car/cars/carI/1
        $carID = $this->get('carID');
        // If the id parameter doesn't exist return all the users

        if ($carID === NULL)
        {
            // Check if the users data store contains users (in case the database result returns NULL)
            if ($cars)
            {
                // Set the response and exit
                $this->response($cars, REST_Controller::HTTP_OK); // OK (200) being the HTTP response code
            }
            else
            {
                // Set the response and exit
                $this->response([
                    'status' => FALSE,
                    'message' => 'No cars were found'
                ], REST_Controller::HTTP_NOT_FOUND); // NOT_FOUND (404) being the HTTP response code
            }
        }
        // Find and return a single record for a particular user.

        $carID = (int) $carID;

        // Validate the id.
        if ($carID <= 0)
        {
            // Invalid id, set the response and exit.
            $this->response(NULL, REST_Controller::HTTP_BAD_REQUEST); // BAD_REQUEST (400) being the HTTP response code
        }

        // Get the user from the array, using the id as key for retrieval.
        // Usually a model is to be used for this.
        $location = NULL;

        if (!empty($cars))
        {
            //Get the user from database
            $location=$this->Car_model->get_car($carID);
        }

        if (!empty($location))
        {
            $this->set_response($location, REST_Controller::HTTP_OK); // OK (200) being the HTTP response code
        }

        else
        {
            $this->set_response([
                'status' => FALSE,
                'message' => 'car could not be found'
            ], REST_Controller::HTTP_NOT_FOUND); // NOT_FOUND (404) being the HTTP response code
        }
    }
}
