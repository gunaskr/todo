package com.sample.todo.task;

import java.util.Objects;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;
 
@Entity
public class Task {
 
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    // task tile
    private String title;
    // task description
    private String description;
    // task created date
    private Date createdDate;
    // task updated date
    private Date lastUpdatedDate;
    // task completion date
    private Date taskCompletionDate;
    // completed status
    private boolean done;
    // task category
    private String category;


   /**
   * Title Of the task
   * @return title
  **/public String getTitle() {
    return title;
  }

  public void setTitle(String title) {
    this.title = title;
  }


   /**
   * Task description
   * @return description
  **/
  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

   /**
   * Date of creating the task
   * @return createdDate
  **/
  public Date getCreatedDate() {
    return createdDate;
  }

  public void setCreatedDate(Date createdDate) {
    this.createdDate = createdDate;
  }

   /**
   * Date of creating the task
   * @return lastUpdatedDate
  **/
  public Date getLastUpdatedDate() {
    return lastUpdatedDate;
  }

  public void setLastUpdatedDate(Date lastUpdatedDate) {
    this.lastUpdatedDate = lastUpdatedDate;
  }


   /**
   * Date of creating the task
   * @return taskCompletionDate
  **/
  public Date getTaskCompletionDate() {
    return taskCompletionDate;
  }

  public void setTaskCompletionDate(Date taskCompletionDate) {
    this.taskCompletionDate = taskCompletionDate;
  }


   /**
   * status of task completion
   * @return done
  **/
  public Boolean isDone() {
    return done;
  }

  public void setDone(Boolean done) {
    this.done = done;
  }

   /**
   * category group of particular task
   * @return category
  **/
  public String getCategory() {
    return category;
  }

  public void setCategory(String category) {
    this.category = category;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Task task = (Task) o;
    return Objects.equals(this.id, task.id) &&
        Objects.equals(this.title, task.title) &&
        Objects.equals(this.description, task.description) &&
        Objects.equals(this.createdDate, task.createdDate) &&
        Objects.equals(this.lastUpdatedDate, task.lastUpdatedDate) &&
        Objects.equals(this.taskCompletionDate, task.taskCompletionDate) &&
        Objects.equals(this.done, task.done) &&
        Objects.equals(this.category, task.category);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, title, description, createdDate, lastUpdatedDate, taskCompletionDate, done, category);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Task {\n");
    
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    title: ").append(toIndentedString(title)).append("\n");
    sb.append("    description: ").append(toIndentedString(description)).append("\n");
    sb.append("    createdDate: ").append(toIndentedString(createdDate)).append("\n");
    sb.append("    lastUpdatedDate: ").append(toIndentedString(lastUpdatedDate)).append("\n");
    sb.append("    taskCompletionDate: ").append(toIndentedString(taskCompletionDate)).append("\n");
    sb.append("    done: ").append(toIndentedString(done)).append("\n");
    sb.append("    category: ").append(toIndentedString(category)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(java.lang.Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }
 
}