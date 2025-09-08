
def get_data():
    f = open("names.txt","r+")
    data = f.read()
    data = data.split()
    return(data)

