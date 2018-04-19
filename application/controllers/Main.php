<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Main extends CI_Controller {

  public function index()
	{
		$this->load->helper('url');

		$this->load->view('first_page');
	}

  public function main_page(){
    $data['page']='main/main_pages';
    $this->load->view('menu/content',$data);
  }
  public function intruction(){
    $data['page']='main/intruction';
    $this->load->view('menu/content',$data);
  }

}
