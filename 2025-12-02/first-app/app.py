from enum import Enum
import json

class Actions(Enum):
    ADD=1
    DELETE= 2
    UPDATE=3
    DISPLAY=4
    EXIT=5

contacts=[{'first': 'lihi', 'last:': 'barlev'}]

def display_menu():
    for act in Actions:
        print(f"press {act.value} to {act.name }")
    return Actions(int(input("select from menu  ")))

def add_contact():
    first_name= input("please enter first name: ")
    last_name= input("please enter last name: ")
    contacts.append({"first":first_name , "last:": last_name})

def save():
   with open ('contacts.json', 'w') as f:
      json.dump(contacts, f, indent=4)

def delete_contact():
   pass

def update_contact():
   pass
   


if __name__== "__main__":
   with open ('contacts.json', 'r') as f:
      contacts=json.load(f)
   while(True):
    user_selection= display_menu()
    if user_selection== Actions.ADD: add_contact()
    if user_selection== Actions.DELETE: delete_contact()
    if user_selection== Actions.UPDATE: update_contact()
    if user_selection== Actions.DISPLAY: print(contacts)
    if user_selection== Actions.EXIT:
        save () 
        exit()

