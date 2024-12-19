import importlib.util
import os
import sys

sys.path.insert(0, os.path.dirname(__file__))

# Load the module dynamically (e.g., main.py or passenger_wsgi.py)
module_name = 'main'  # Replace with 'passenger_wsgi' if needed
module_path = os.path.join(os.path.dirname(__file__), f'{module_name}.py')

spec = importlib.util.spec_from_file_location(module_name, module_path)
wsgi = importlib.util.module_from_spec(spec)
spec.loader.exec_module(wsgi)

application = wsgi.app 