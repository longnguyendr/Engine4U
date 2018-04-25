<?php
/**
 *
 */
class Car_model extends CI_model
{

  function get_cars(){
    $this->db->select('*');
    $this->db->from('bookings');
    $this->db->join('cars','cars.carID = bookings.carID');
    return $this->db->get()->result_array();
  }
  function get_car($carID){
    $this->db->select('*');
    $this->db->from('bookings');
    $this->db->join('cars','cars.carID = bookings.carID');
    $this->db->where('carID',$carID);
    return $this->db->get()->result_array();
  }
  function get_cas(){
    $this->db->select('carID');
    $this->db->from('bookings');
    return $this->db->get()->result_array();
  }
}

?>
