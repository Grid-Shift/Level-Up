// Namespace Object
var LevelUp = LevelUp || {};

// This file is primarily for listener style code (e.g. open a modal)
(function ($, APP) {
  'use strict';

  APP.View = function () {
    // Common view objects
    this.newGoalModal = $("#newGoalModal");
    this.newGoalContent = $("#newGoalContent");

    // Modal placeholder text
    this.modalPlaceholderText = "What would you like to accomplish?";
  };

  /**
   * Opens the modal & textfield into focus 
   * @return {false}
   */
  APP.View.prototype.openModal = function () {
    /**
     * @todo Refactor code so that event propagation isn't completely blocked. Only the url event should be blocked.
     */
    this.newGoalModal.removeClass("hidden");
    this.newGoalContent.focus();

    window.console.log(this);
    return false;
  };

  /**
  * Closes the modal, blurs the input field & resets the text
  */
  APP.View.prototype.closeModal = function () {
    this.newGoalModal.addClass("hidden");
    this.newGoalContent.html(this.modalPlaceholderText).blur();
  };

  /**
  * Adds focus class to .goalContent parent when focused
  *
  * @param {object} $obj jQuery DOM object
  */
  APP.View.prototype.existingGoalAddFocus = function ($obj) {
    $($obj).parent(".goal").addClass("focus");
  };

  /**
  * Removes focus class from .goalContent parent when focused
  *
  * @param {object} $obj jQuery DOM object
  */
  APP.View.prototype.existingGoalRemoveFocus = function ($obj) {
    $($obj).parent(".goal").removeClass("focus");
  };

  /**
  * Clear placeholder content
  *
  * @param {object} e DOM Event object
  */
  APP.View.prototype.clearPlaceholder = function (e) {
    var returnKey = 13;
    if (e.keyCode != returnKey && $(e.target).html() == this.modalPlaceholderText) {
      $(e.target).html("");
    }
  };

  /**
  * Clear placeholder content
  *
  * @param {string}  content        Text content for new goals
  * @param {boolean} isCurrentGoal  Will the generated HTML be placed in current goal block?
  * @return {string} HTML string to be inserted into the DOM
  */
  APP.View.prototype.goalHTML = function (content, isCurrentGoal) {
    /**
     * @todo Create & return DOM objects instead of a string
     */
    var currentGoalClass;

    if (isCurrentGoal) {
      currentGoalClass = 'current';
    }

    var html = '<li class="goalWrapper">' +
          '<article class="goal' + currentGoalClass + '">' +
            '<div class="goalContent" contenteditable>' +
              content +
            '</div>' +
            '<menu class="goalActions">' +
              '<ul class="goalActionsList goalMenu">' +
                '<li class="goalAction"><a href="#deleteGoal" class="icon-Trash" title="Remove goal">Delete Goal</a></li>' +
                '<li class="goalAction"><a href="#editGoal" class="icon-Edit" title="Edit goal">Edit Goal</a></li>' +
                '<li class="goalAction"><a href="#accomplishGoal" class="icon-Award" title="Mark goal accomplished">Mark goal accomplished</a></li>' +
              '</ul>' +
              '<ul class="goalActionsList editMenu">' +
                '<li class="goalAction"><a href="#cancel" class="icon-Cancel" title="Cancel">Cancel</a></li>' +
                '<li class="goalAction"><a href="#save" class="icon-Accept" title="Save changes">Save Changes</a></li>' +
              '</ul>' +
            '</menu>' +
          '</article>' +
        '</li>';
    return html;
  };

})($, LevelUp);
