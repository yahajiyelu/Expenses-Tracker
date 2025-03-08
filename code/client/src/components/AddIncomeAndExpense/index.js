import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import Cookies from 'js-cookie';

const incomeCategories = ['Salary', 'Freelance', 'Investments', 'Other'];
const expenseCategories = ['Rent', 'Utilities', 'Groceries'];

const StyledForm = styled(Form)`
    width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #eaeaea;
    border-radius: 5px;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    gap:10px;
`;

const Title = styled.h2`
    font-size: 24px;
    margin-bottom: 20px;
    text-align: center;
`;

const AddIncomeAndExpense = () => {
    const [formData, setFormData] = useState({
        amount: '',
        category: '',
        month: '',
        year: '',
        date: '',
    });

    const [type, setType] = useState('income');

    const handleTypeChange = (newType) => {
        setType(newType);
    };

    const handleIncomeSubmit = async (e) => {
        e.preventDefault();
        const api = 'http://localhost:5100/expenses';
        const userId = Cookies.get("userId");

        const data = {
            userId: userId,
            monthYear: formData.year,
            monthNumber: formData.month,
            tables: [
                {
                    tableName: "INCOME",
                    columns: ["Date", "Category", "Amount"],
                    rows: [
                        {
                            date: formData.date,
                            name: formData.category,
                            amount: formData.amount
                        }
                    ]
                }
            ]
        };

        try {
            const response = await fetch(api, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                const responseData = await response.json();
                alert('Income added successfully:');
                setFormData({
                    amount: '',
                    category: '',
                    month: '',
                    year: '',
                    date: '',
                })
            } else {
                alert('Failed to add income');
            }
        } catch (error) {
            alert('Error while adding income:', error);
        }
    };

    const handleExpenseSubmit = async (e) => {
        e.preventDefault();
        const api = 'http://localhost:5100/expenses';
        // const userId = Cookies.getItem("userId");
        const userId = Cookies.get("userId");

        const data = {
            userId: userId,
            monthYear: formData.year,
            monthNumber: formData.month,
            tables: [
                {
                    tableName: "EXPENSE",
                    columns: ["Date", "Category", "Amount"],
                    rows: [
                        {
                            date: formData.date,
                            name: formData.category,
                            amount: formData.amount
                        }
                    ]
                }
            ]
        };
        
        try {
            const response = await fetch(api, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                const responseData = await response.json();
                alert('Income added successfully:', responseData);
            } else {
                alert('Failed to add income');
            }
        } catch (error) {
            alert('Error while adding income:', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    return (
        <div style={{ paddingTop: '10vh', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <StyledForm onSubmit={type === 'income' ? handleIncomeSubmit : handleExpenseSubmit}>
                <Title>
                    Add{' '}
                    <Form.Group controlId="typeSelector">
                        <Form.Label>Transaction Type</Form.Label>
                        <Form.Control
                            as="select"
                            value={type}
                            onChange={(e) => handleTypeChange(e.target.value)}
                        >
                            <option value="income">Income</option>
                            <option value="expense">Expense</option>
                        </Form.Control>
                    </Form.Group>
                </Title>
                <Form.Group style={{ paddingBottom: '10px' }} as={Row} controlId="amount">
                    <Form.Label column sm={3}>Amount</Form.Label>
                    <Col sm={9}>
                        <Form.Control
                            type="number"
                            placeholder="Enter amount"
                            name="amount"
                            value={formData.amount}
                            onChange={handleInputChange}
                            required
                        />
                    </Col>
                </Form.Group>
                <Form.Group style={{ paddingBottom: '10px' }} as={Row} controlId="category">
                    <Form.Label column sm={3}>Category</Form.Label>
                    <Col sm={9}>
                        <Form.Control
                            as="select"
                            name="category"
                            value={formData.category}
                            onChange={handleInputChange}
                            required
                        >
                            <option value="" disabled>Select category</option>
                            {type === 'income' ? incomeCategories.map((category) => (
                                <option key={category} value={category}>{category}</option>
                            )) : expenseCategories.map((category) => (
                                <option key={category} value={category}>{category}</option>
                            ))}
                        </Form.Control>
                    </Col>
                </Form.Group>
                {[{ controlId: 'month', label: 'Month Number' }, { controlId: 'year', label: 'Year' }, { controlId: 'date', label: 'Date' }].map((field) => (
                    <Form.Group style={{ paddingBottom: '10px' }} as={Row} controlId={field.controlId} key={field.controlId}>
                        <Form.Label column sm={3}>{field.label}</Form.Label>
                        <Col sm={9}>
                            <Form.Control
                                type="text"
                                placeholder={`Enter ${field.label.toLowerCase()}`}
                                name={field.controlId}
                                value={formData[field.controlId]}
                                onChange={handleInputChange}
                                required
                            />
                        </Col>
                    </Form.Group>
                ))}
                <Button type="submit" variant="primary" style={{ width: '100%' }}>Submit</Button>
            </StyledForm>
        </div>
    );
};

export default AddIncomeAndExpense;
