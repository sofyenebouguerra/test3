import {Component, OnInit, AfterViewInit} from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-stylist',
  templateUrl: './stylist.component.html',
  styleUrls: ['./stylist.component.css']
})
export class StylistComponent implements OnInit,AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.setupToggleButton();
    this.setupUserProfile();
    this.setupCloseChatBtn();
    this.setupOpenChatBtn();
    this.setupOpenMusicBtn();
    this.setupOpenTimerBtn();
  }

  private setupToggleButton() {
    $('.toggle-button').on('click', () => {
      $('.left-sidebar').toggleClass('minimize');
    });
  }

  private setupUserProfile() {
    $('.user-profile').on('click', () => {
      $('.left-sidebar').toggleClass('minimize');
    });
  }

  private setupCloseChatBtn() {
    $('.close-chat-btn').on('click', () => {
      $('.direct-messaging').addClass('minimize');
    });
  }

  private setupOpenChatBtn() {
    $('.open-chat-btn').on('click', () => {
      $('.direct-messaging').toggleClass('minimize');
    });
  }

  private setupOpenMusicBtn() {
    $('.open-music-btn').on('click', () => {
      $('.music-player').toggleClass('show');
    });
  }

  private setupOpenTimerBtn() {
    $('.open-timer-btn').on('click', () => {
      $('.timer-display').toggleClass('show');
    });
  }


}
