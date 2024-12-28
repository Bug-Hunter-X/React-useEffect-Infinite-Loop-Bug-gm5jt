```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct logic
    const intervalId = setInterval(() => {
      if (count > 5) {
        clearInterval(intervalId);
      }
      console.log("Count", count)
    }, 1000);
    return () => clearInterval(intervalId);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```