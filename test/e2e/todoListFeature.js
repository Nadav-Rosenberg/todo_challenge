describe('Todo List', function() {
  var taskInputBox = element(by.model('todoCtrl.newTask'))
  var addTaskButton = element(by.className('btn'))

  beforeEach(function() {
    browser.get('http://localhost:8080');
  })

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('Todo List');
  });

  it('adds tasks', function() {
    taskInputBox.sendKeys('Clean the kitchen');
    addTaskButton.click();
    var tasks = element.all(by.repeater('task in todoCtrl.taskList'));
    expect(tasks.get(0).getText()).toEqual('Clean the kitchen');  
  });
});

