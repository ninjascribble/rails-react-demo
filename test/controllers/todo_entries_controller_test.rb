require 'test_helper'

class TodoEntriesControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get todo_entries_create_url
    assert_response :success
  end

  test "should get update" do
    get todo_entries_update_url
    assert_response :success
  end

end
