const user = require("../src/user");

test("user obj is returned properly", () => {
    const userObj = user.getDetails()
    expect(userObj.firstName).toBe("Loveday")
    expect(userObj.lastName).toBe("Ikegbulam")
    expect(userObj).toHaveProperty("age")
    expect(userObj).toHaveProperty("completion")
    expect(userObj).toHaveProperty("heigth")
    expect(userObj).toBeLessThan(100)
})