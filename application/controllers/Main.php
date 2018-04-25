<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Main extends CI_Controller {

  public function index()
	{
		$this->load->helper('url');

		$this->load->view('first_page');
	}

  public function main_page(){
    $this->load->helper('url');
    $data['page']='main/main_pages';
    $this->load->view('menu/content',$data);
  }
  public function test(){
    $this->load->helper('url');
    $data['page']='main/tests';
    $this->load->view('menu/content',$data);
  }
  public function test2(){
    $this->load->helper('url');
    $data['page']='main/tests2';
    $this->load->view('menu/content',$data);
  }

}
