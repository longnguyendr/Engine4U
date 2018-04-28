<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Search extends CI_Controller {

  public function search_engine(){
    $data['page']='search/search_enginess';
    $this->load->view('menu/content',$data);
  }

  public function car($slug = null)
  {
    $data['cars'] = $this->search_model->get_carss($slug);
    $car_id = $data['cars']['carID'];
    $data['page'] = 'main/tests2';
    $this->load->view('menu/content', $data);
  }
}
