/* Define the guardrail function */
export default function guardrail(mathFunction) {
  /* Initialize an empty array to store the results and error messages */
  const queue = [];

  try {
    /* Execute the provided mathFunction and push the result into the queue */
    queue.push(mathFunction());
  } catch (err) {
    /* If an error occurs, convert the error object to a string and push it into the queue */
    queue.push(String(err));
  } finally {
    /* Regardless of success or failure, append the guardrail message to the queue */
    queue.push('Guardrail was processed');
  }

  return queue;
}
