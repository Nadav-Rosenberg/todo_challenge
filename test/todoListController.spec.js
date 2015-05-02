describe('TodoList', function() {
  beforeEach(module('TodoList'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('TodoListController');
  }));

  it('initialises with empty newTask and empty taskList', function() {
    expect(ctrl.newTask).toBeUndefined();
    expect(ctrl.taskList).toEqual([]);
  });

  describe('when adding a task', function() {

    it('displays list of tasks', function() {
      ctrl.newTask = "Cleaning the house";
      ctrl.addTask();
      ctrl.newTask = "fixing the hunger";
      ctrl.addTask();
      expect(ctrl.taskList).toEqual(["Cleaning the house", "fixing the hunger"]);
    });

    it('Clean the add task field after adding a task', function() {
      ctrl.newTask = "Cleaning the house";
      ctrl.addTask();
      expect(ctrl.newTask).toEqual("");
    });
  });
});
