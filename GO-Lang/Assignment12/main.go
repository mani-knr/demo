package main

import "fmt"

type Employee struct {
	EmpId    int
	Name     string
	Age      int
	Salary   int
	DeptName string
}
type Permenant struct {
	Details  Employee
	BasicPay int
	Pf       int
}
type Contract struct {
	Details  Employee
	BasicPay int
}
type Sales struct {
	Details   Employee
	Incentive int
}
type Employees interface {
	calculateSalary() (string, int)
	getDeptAndName() (string, string)
}

func (emp Permenant) calculateSalary() (string, int) {
	return emp.Details.Name, emp.Details.Salary + emp.BasicPay + emp.Pf
}
func (emp Contract) calculateSalary() (string, int) {
	return emp.Details.Name, emp.Details.Salary + emp.BasicPay
}
func (emp Sales) calculateSalary() (string, int) {
	return emp.Details.Name, emp.Details.Salary + emp.Incentive
}
func (emp Permenant) getDeptAndName() (string, string) {
	return emp.Details.Name, emp.Details.DeptName
}
func (emp Contract) getDeptAndName() (string, string) {
	return emp.Details.Name, emp.Details.DeptName
}
func (emp Sales) getDeptAndName() (string, string) {
	return emp.Details.Name, emp.Details.DeptName
}

func getMonthlySalary(employees []Employees) {
	fmt.Println("\n\n<---Monthly Salary Of Employees--->")
	for _, employee := range employees {
		name, salary := employee.calculateSalary()
		fmt.Printf("\n\tSalary of %v : %v", name, salary)
	}
}
func salaryExpenseForCompany(employees []Employees) {
	var totalExpense int
	for _, employee := range employees {
		_, salary := employee.calculateSalary()
		totalExpense += salary
	}
	fmt.Println("\n\n<---Company Salary Expense---->")
	fmt.Printf("\n\tTotal Expense : %v", totalExpense)
}

func groupEmployeesByDept(employees []Employees) {
	empGroup := make(map[string][]string)
	for _, employee := range employees {
		empName, empDept := employee.getDeptAndName()
		empGroup[empDept] = append(empGroup[empDept], empName)
	}
	fmt.Printf("\n\n<---Grouping Employees By Dept Name---->\n\n")
	for key, value := range empGroup {
		fmt.Println("\t", key, " : ", value)
	}
}

func main() {
	//employees Array
	perm1 := Permenant{
		Details: Employee{
			EmpId:    1,
			Name:     "manikanta",
			Age:      22,
			Salary:   10000,
			DeptName: "Full stack",
		},
		BasicPay: 8000,
		Pf:       2000,
	}
	perm2 := Permenant{
		Details: Employee{
			EmpId:    5,
			Name:     "manikrishna",
			Age:      22,
			Salary:   9000,
			DeptName: "Full stack",
		},
		BasicPay: 8000,
		Pf:       2000,
	}
	cont1 := Contract{
		Details: Employee{
			EmpId:    2,
			Name:     "bharath",
			Age:      27,
			Salary:   8000,
			DeptName: "UI/UX ",
		},
		BasicPay: 6000,
	}
	cont2 := Contract{
		Details: Employee{
			EmpId:    4,
			Name:     "mhc",
			Age:      30,
			Salary:   7000,
			DeptName: "UI/UX ",
		},
		BasicPay: 5000,
	}
	sal1 := Sales{
		Details: Employee{
			EmpId:    3,
			Name:     "vasu",
			Age:      22,
			Salary:   6000,
			DeptName: "marketing",
		},
		Incentive: 2000,
	}
	employees := []Employees{perm1, cont1, sal1, perm2, cont2}
	getMonthlySalary(employees)
	salaryExpenseForCompany(employees)
	groupEmployeesByDept(employees)
	fmt.Printf("\n\n\n")
}
