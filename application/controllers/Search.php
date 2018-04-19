<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Search extends CI_Controller {

  public function search_engine(){
    $data['page']='search/search_enginess';
    $this->load->view('menu/content',$data);
  }

}
