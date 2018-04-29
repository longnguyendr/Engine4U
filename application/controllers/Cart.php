<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Cart extends CI_Controller {

  public function Cart2s(){
    $data['page']='cart/cart2';
    $this->load->view('menu/content',$data);
  }
  public function Cart3s(){
    $data['page']='cart/cart3';
    $this->load->view('menu/content',$data);
  }
  public function Cart4s(){
    $data['page']='cart/cart4';
    $this->load->view('menu/content',$data);
  }
  public function Cart5s(){
    $data['page']='cart/cart5';
    $this->load->view('menu/content',$data);
  }
}
