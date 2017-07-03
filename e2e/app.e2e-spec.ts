import { EmployeeDemoAngularPage } from './app.po';

describe('employee-demo-angular App', () => {
  let page: EmployeeDemoAngularPage;

  beforeEach(() => {
    page = new EmployeeDemoAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
