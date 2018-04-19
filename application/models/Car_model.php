<?php
/**
 *
 */
class Car_model extends CI_model
{

  function get_car(){
    $this->db->select('*');
    $this->db->from('cars');
    return $this->db->get()->result_array();
  }
}
