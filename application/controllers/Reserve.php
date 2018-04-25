<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Reserve extends CI_Controller {

  public function Reserves(){
    $data['page']='reserve/reserve';
    $this->load->view('menu/content',$data);
  }

}
