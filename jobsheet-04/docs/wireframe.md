# Wireframe & User Flow — SIMPUS-Mini

Sub-CPMK: Design the UI/UX of the application (project).

The existing pages (Home, Add/List Books, Add/List Members — Jobsheets 1-3) don't yet include Login, Officer Dashboard, and Borrowing/Return features. This document designs wireframes for those pages before implementation starting in Jobsheet 5 and onwards.

## Actors
- **Guest**: can only view the book catalog (Home, Book List) without signing in.
- **Officer**: signs in to access all CRUD features and borrowing transactions.

## User Flow — Borrow Book

```
[Officer Sign In] -> [Dashboard] -> [Select "New Borrowing" menu]
        -> [Select Member] -> [Select Book (stock > 0)]
        -> [Save] -> [Book stock decreases by 1] -> [Back to Dashboard]
```

## User Flow — Return Book

```
[Dashboard] -> [Select "Return" menu] -> [Search active transaction (member/book)]
        -> [Mark "Returned"] -> [Book stock increases by 1]
        -> [Back to Dashboard]
```

## Wireframe: Login Page

```
+--------------------------------------+
|              SIMPUS-Mini             |
|--------------------------------------|
|                                      |
|        [ Officer Sign In ]          |
|                                      |
|   Username : [______________]       |
|   Password : [______________]       |
|                                      |
|          [   Sign In   ]            |
|                                      |
|   Don't have an account? Sign up    |
+--------------------------------------+
```

## Wireframe: Officer Dashboard

```
+-----------------------------------------------------+
| SIMPUS-Mini      Home | Books | Members | Borrowing | (Officer Name) Logout |
|-------------------------------------------------------|
|  [Total Books]   [Total Members]   [Currently Borrowed]    |
|                                                         |
|  Quick Actions:                                        |
|  [ + New Borrowing ]   [ + Return ]                    |
|                                                         |
|  Recent Transactions                                  |
|  --------------------------------------------------    |
|  Member | Book | Borrow Date | Status                  |
+-----------------------------------------------------+
```

## Wireframe: Book Borrowing Form

```
+--------------------------------------+
|  Book Borrowing Form                 |
|--------------------------------------|
|  Member : [ dropdown select member ] |
|  Book    : [ dropdown, stock > 0 ]   |
|  Borrow Date : [ auto: today ]       |
|                                      |
|          [  Save Borrowing  ]       |
+--------------------------------------+
```

## Wireframe: Book Return Form

```
+--------------------------------------+
|  Book Return                         |
|--------------------------------------|
|  Search active transaction:          |
|  [ member name / book title ______] |
|                                      |
|  Member | Book | Borrow Date | [Return] |
+--------------------------------------+
```

## Wireframe: Member Borrow History

```
+--------------------------------------+
|  Borrow History — Siti Aminah        |
|--------------------------------------|
|  Book            | Borrow   | Return | Status      |
|  Laskar Pelangi   | 01/07    | 10/07   | Completed   |
|  Bumi Manusia     | 15/07    | -       | Borrowed    |
+--------------------------------------+
```

## Wireframe: Register New Member Page

+-------------------------------------------------------------+
| SIMPUS-Mini                          [Home] [Login]         |
+-------------------------------------------------------------+
|                                                             |
|  ## Register New Member                                     |
|  Fill out the form below to register as a new library member|
|                                                             |
|  +-------------------------------------------------------+  |
|  | Full Name:                                            |  |
|  | [ Enter your full name...                           ] |  |
|  +-------------------------------------------------------+  |
|                                                             |

|  +-------------------------------------------------------+  |
|  | Email Address:                                        |  |
|  | [ Enter your email...                               ] |  |
|  +-------------------------------------------------------+  |
|                                                             |

|  +-------------------------------------------------------+  |
|  | Phone Number:                                         |  |
|  | [ Enter your phone number...                        ] |  |
|  +-------------------------------------------------------+  |
|                                                             |

|  +-------------------------------------------------------+  |
|  | Address:                                              |  |
|  | [ Enter your address...                             ] |  |
|  +-------------------------------------------------------+  |
|                                                             |

|  [ Cancel ]                  [ Submit Registration ]        |
|                                                             |
+-------------------------------------------------------------+


## User Flow — Overdue Members Search

[Dashboard] -> [Select "Members" menu] -> [Click "Overdue Filter"]
        -> [System displays list of members with late returns]
        -> [Select specific member] -> [View overdue details & fines]

## Consistency with Existing Design
- Accent colors, navbar typography, and table/card styles follow `assets/css/style.css` built in Jobsheets 2-3.
- Navbar will add a **Borrowing** menu and login status indicator (officer name / Logout button) starting implementation in Jobsheet 10.
- Edge cases to handle during implementation: books with zero stock cannot be selected in borrowing forms; members with overdue fees are validated in Jobsheet 12 (independent assignment).

## Additional Edge Cases

1. **Duplicate Active Borrowing:**
   - *Scenario:* What happens if the librarian tries to lend the same book to the same member twice in a row while the first loan is still active?
   - *System Action:* The system should block the transaction and show an error message: *"Member already has an active loan for this book."*

2. **Exceeding Maximum Loan Limit:**
   - *Scenario:* What happens if a member has already reached the maximum limit of borrowed books (e.g., 3 books) and tries to borrow another one?
   - *System Action:* The system should prevent selection and display a warning: *"Maximum borrowing limit reached."*

3. **Returning an Already Returned Book:**
   - *Scenario:* What happens if an officer accidentally clicks the "Return" button twice for the same transaction?
   - *System Action:* The system should disable the button or show a notice that the book has already been marked as returned.


