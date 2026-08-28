import { test, expect } from "@playwright/test"

test("displays the starter message", async ({ page }) => {
  await page.goto("/")
  await expect(page.getByRole("heading", { name: "Hello, world" })).toBeVisible()
})
