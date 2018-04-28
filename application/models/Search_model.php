<?php
/**
 *
 */
class Search_model extends CI_model
{
  public function __construct(){
    $this->load->database();
  }
  public function get_carss($slug=FALSE)
  {
    if($slug === FALSE){
				$query = $this->db->get('cars');
				return $query->result_array();
			}
			$query = $this->db->get_where('cars', array('carID' => $slug));
			return $query->row_array();
		}
  }
