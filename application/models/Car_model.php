<?php
/**
 *
 */
class Car_model extends CI_model
{

  function get_cars(){
    $this->db->select('*');
    $this->db->from('cars');
    $this->db->join('users','cars.userID = users.userID');
    $this->db->join('calendar','cars.carID = calendar.carID','left');
    return $this->db->get()->result_array();
  }
  function get_car($carID){
    $this->db->select('*');
    $this->db->from('cars');
    $this->db->join('users','cars.userID = users.userID');
    $this->db->where('cars.carID',$carID);
    return $this->db->get()->result_array();
  }
  function get_cas(){
    $this->db->select('carID');
    $this->db->from('bookings');
    return $this->db->get()->result_array();
  }
}

?>
